import ExperienceEntry from "@/features/experience/model/experienceEntry";
import RevealOnScroll from "@/components/motion/revealOnScroll";
import TimelineIcon from "@/features/experience/components/timelineIcon";
import TimelineElement from "@/features/experience/components/timelineElement";
import {useTranslations} from "next-intl";
import {
    BACKEND_PAYUNICARD,
    BACKEND_REVENUE, FULLSTACK_BITOID,
    TAX_CONTROLLER, MBA_ILIA,
    BACHELOR_ILIA, EXPERIENCE_T_NODE
} from "@/features/experience/experience.constants";

const keys = [
    {id: BACKEND_PAYUNICARD, isWork: true},
    {id: BACKEND_REVENUE, isWork: true},
    {id: FULLSTACK_BITOID, isWork: true},
    {id: TAX_CONTROLLER, isWork: true},
    {id: MBA_ILIA, isWork: false},
    {id: BACHELOR_ILIA, isWork: false},
]

function Experience() {
    const exp = translateExperiences(useTranslations(EXPERIENCE_T_NODE))
    return <ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
        {exp.map((item, index) => (<RevealOnScroll key={index}>
            <li className="transition-all duration-1000 delay-100 ease-out opacity-0 scale-0 pointer-events-none">
                <hr/>
                <TimelineIcon work={item.work}></TimelineIcon>
                <TimelineElement left={index % 2 === 0} time={item.time} title={item.title}>
                    {item.description}
                </TimelineElement>
                <hr/>
            </li>
        </RevealOnScroll>))}
    </ul>

}

function translateExperiences(t) {
    return keys.map(entry =>
        new ExperienceEntry(
            t(`${entry.id}.title`),
            t(`${entry.id}.description`),
            t(`${entry.id}.time`),
            entry.isWork
        ))
}


export default Experience