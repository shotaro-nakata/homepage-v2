import style from './title.module.scss'

export default ({ title, description, imgSrc, category, grey }) => {
  return (
    <>
      <section className={`${style.title} separate ${grey ? 'grey' : null}`}>
        <div className={style.container}>
          <div className={style.category}>{category}</div>
          <h1 className={style.h1}>{title}</h1>
          <p className={style.p}>{description}</p>
        </div>
        <div
          className={style.background}
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        ></div>
      </section>
    </>
  )
}
