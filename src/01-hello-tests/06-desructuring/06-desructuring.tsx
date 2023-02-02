import {useState} from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }

}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useArtemState(m: string) {
    return [m, function (){}]
}

export const ManComponent: React.FC<PropsType> = (props) => {
 const {title, man, ...restProps} = props

    const [message, setMessage] = useArtemState('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>

}