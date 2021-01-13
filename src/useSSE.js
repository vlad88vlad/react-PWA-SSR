import React, { useContext, useState, useEffect } from 'react';

export const DataContext = React.createContext({});

export const InternalContext = React.createContext({
    requests: [],
    resolved: false,
    current: 0,
});


/**
 *
 * @param effect runction returning promise
 * @param dependencies  list of dependencies like in useEffect
 */
export function useSSE(
    effect,
    dependencies,
) {
    const internalContext = useContext(InternalContext);
    const callId = internalContext.current;

    internalContext.current += 1;
    const ctx = useContext(DataContext);
    const [data, setData] = useState(ctx[callId]?.data || null);
    const [error, setError] = useState(ctx[callId]?.error || null);
    const [loading, setLoading] = useState(true);

    if (!internalContext.resolved) {
        let cancel = Function.prototype;

        const effectPr = new Promise((resolve) => {
            cancel = () => {
                if (!ctx[callId]) {
                    ctx[callId] = {
                        error: { messgae: 'timeout' },
                        id: callId,
                    };
                }
                resolve(callId);
            };


            return effect()
                .then((res) => res)
                .then((res) => {
                    ctx[callId] = { data: res };
                    resolve(callId);
                })
                .catch((error) => {
                    ctx[callId] = { error };
                    resolve(callId);
                });
        });

        internalContext.requests.push({
            id: callId,
            promise: effectPr,
            cancel,
        });
    }

    useEffect(() => {
        if (internalContext.resolved && !ctx[callId]) {
            // setLoading(true);
            effect()
                .then((res) => {
                    setLoading(false);
                    setData(res);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
        delete ctx[callId];
    }, dependencies);


    return [data, loading, error];
}

export const createBroswerContext = (
    variableName = '_initialDataContext',
) => {
    const initial = window && window[variableName] ? window[variableName] : {};
    const internalContextValue = {
        current: 0,
        resolved: true,
        requests: [],
    };

    function BroswerDataContext(props) {
        return (
            // eslint-disable-next-line react/jsx-filename-extension
            <InternalContext.Provider value={internalContextValue}>
                <DataContext.Provider value={initial}>
                    {props.children}
                </DataContext.Provider>
            </InternalContext.Provider>
        );
    }

    return BroswerDataContext;
};


export const createServerContext = () => {
    const ctx = {};
    const internalContextValue = {
        current: 0,
        resolved: false,
        requests: [],
    };

    function ServerDataContext(props) {
        return (
            <InternalContext.Provider value={internalContextValue}>
                <DataContext.Provider value={ctx}>
                    {props.children}
                </DataContext.Provider>
            </InternalContext.Provider>
        );
    }

    const resolveData = async () => {
        const effects = internalContextValue.requests.map((item) => item.promise);

        await Promise.all(effects);

        internalContextValue.resolved = true;
        internalContextValue.current = 0;


        return {
            data: ctx,
            toJSON() {
                return this.data;
            },
            toHtml(variableName = '_initialDataContext') {
                return `<script>window.${variableName} = ${JSON.stringify(
                    this.data,
                )};</script>`;
            },
        };
    };


    return {
        ServerDataContext,
        resolveData,
    };
};
