// import style from './chooseUs.module.css'
// export default function Progress({ items, scrollYProgress }: any) {
//     return (
//         <div className={style.progress}>
//             {items.map((_: any, i: number) => {

//                 const step = 1 / items.length
//                 const start = i * step
//                 const end = start + step

//                 const scale = useTransform(
//                     scrollYProgress,
//                     [start, end],
//                     [0.5, 1.2]
//                 )

//                 const opacity = useTransform(
//                     scrollYProgress,
//                     [start, end],
//                     [0.3, 1]
//                 )

//                 return (
//                     <motion.div
//                         key={i}
//                         className={style.dot}
//                         style={{ scale, opacity }}
//                     />
//                 )
//             })}
//         </div>
//     )
// }