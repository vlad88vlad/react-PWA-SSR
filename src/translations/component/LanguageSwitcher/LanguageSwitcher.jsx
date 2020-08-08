import React from 'react';
import { useLanguageSwitcher } from '../../hooks/useLanguageSwitcher';

const LanguageSwitcher = () => {
    const {
        languages, language, changeLanguage, t,
    } = useLanguageSwitcher();

    const onChange = ({ target: { value } }) => {
        changeLanguage(value);
    };

    if (languages.length) {
        return (
            <div className="LanguageSwitcher">
                <label htmlFor="language-switcher">
                    {t('common.language')}
                    :
                </label>
                <select
                    id="language-switcher"
                    value={language}
                    onChange={onChange}
                >
                    {languages.map((lang) => (
                        <option value={lang} key={lang}>{lang}</option>

                    ))}
                </select>
            </div>
        );
    }

    return null;
};

export default LanguageSwitcher;
