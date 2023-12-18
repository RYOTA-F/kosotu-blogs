import { ARIA_LABEL } from '../const'
import { IHeadingDefault } from '../types'
import style from './H2.module.css'

export function H2({ children }: IHeadingDefault) {
  return (
    <h2 className={style.heading} aria-label={ARIA_LABEL.H2}>
      <div className={style.topBorder} />
      {children}
      <div className={style.bottomBorder} />
    </h2>
  )
}
