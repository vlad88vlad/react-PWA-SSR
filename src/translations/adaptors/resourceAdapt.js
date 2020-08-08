export const resourceAdapt = (resources) => {
    try {
        if (Array.isArray(resources) && resources.length > 0) {
            return resources.reduce((accumulator, currentValue) => {
                if (currentValue?.name) {
                    accumulator[currentValue.name] = currentValue?.value;
                }


                return accumulator;
            }, {});
        }

        return {};
    } catch {
        return {};
    }
};
