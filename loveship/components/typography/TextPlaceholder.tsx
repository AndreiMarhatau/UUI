import React from 'react';
import * as css from './TextPlaceholder.scss';
import * as styles from '../../assets/styles/scss/loveship-color-vars.scss';
import * as types from '../types';
import cx from 'classnames';
import { IHasCX } from '@epam/uui';

export interface TextPlaceholderProps extends IHasCX {
    wordsCount?: number;
    color?: types.EpamColor;
    isNotAnimated?: boolean;
}

export const TextPlaceholder: React.FunctionComponent<TextPlaceholderProps> = (props) => {
    const pattern =  `&nbsp;`;
    let text = React.useMemo(() => {
        const words = [];
        for (let i = 0; i < (props.wordsCount || 1); i++) {
            let lengthWord = Math.floor(Math.random() * 10 + 8);
            words.push(pattern.repeat(lengthWord));
        }
        return words;
    }, [props.wordsCount]);

    return (
        <div className={css.container}>{
            text.map((it:string, index:number)=> (
                <span
                key={index}
                className={ cx([
                    props.cx,
                    css.loadingWord,
                    styles['color-' + (props.color || 'night100')],
                    !props.isNotAnimated && css.animatedLoading,
                ]) }
                    dangerouslySetInnerHTML={{__html: it}}
                />
            ))}
        </div>
    );
}
