import { useEffect } from "react"
import { useInView } from "react-intersection-observer"



const SectionContainer = ({children, ind, SectionInView}) => {
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) SectionInView(ind)
    },[inView])

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}


export default SectionContainer