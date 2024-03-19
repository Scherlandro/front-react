import {MenuMain} from "../../pages/Menu/Menu";
import React from "react";

interface IInputDashord {
    lable?: string;
    value?: string;

    onChange?: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputDashord: React.FC<IInputDashord> =  (props) => {

    return (
        <div>
            <MenuMain/>
            <label>
                <span>{props.lable}</span>
                <input
                    value={props.value}
                    onChange={e => props.onChange ? props.onChange(e.target.value) : null}
                    onKeyDown={e => e.key === 'Enter' ? props.onPressEnter : undefined}
                />
            </label>
        </div>
    )

}