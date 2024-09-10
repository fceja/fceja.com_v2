import "@scss/common/components/Tags.scss"
import { TagLinkI } from "@content/common/TagContent"

interface TagsProps {
    tagData: (TagLinkI | undefined)[],
    parentIndex: number,
    className: string
}

const Tags = (props: TagsProps) => {
    const { className, tagData, parentIndex } = props

    return (
        <div className={`${className}-tags-container d-flex flex-wrap`}>
            {tagData && tagData.map((elem, i) => {
                if (!elem) return;

                return (
                    <a
                        key={`${elem.name}-link-${i}`}
                        href={elem.url}
                        target={elem.target}
                        className={`${className}-tag-link`}
                        style={{ margin: "9px 9px 0 0" }}
                    >
                        <span
                            key={`tag-${parentIndex}-${i}`}
                            className={`${className}-tag`}
                            style={{ padding: "3px 7px 3px 7px" }}
                        >
                            {elem.name}
                        </span>
                    </a>
                )
            })}
        </div>
    )
}
export default Tags
