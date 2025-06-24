import { Container } from "../../components/widgets/container/container"
import { Select } from "../../components/widgets/select/select"
import s from './selectPage.module.scss'

export const SelectPage = () => {
    return (
        <Container className={s.select} children={<Select/>} />
    )
}