import clsx from "clsx"
import s from './container.module.scss'

type Container = {
    className?: string,
    children: React.ReactNode
} 
export const Container = ({className, children}: Container) => {
    return (
        <div className={clsx(s.container, className)}>
            {children}
        </div>
    )
}