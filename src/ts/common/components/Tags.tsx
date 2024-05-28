import "@scss/common/components/Tags.scss"

interface TagsProps {
    tagData: string[],
    parentIndex: number,
    className: string
}

const Tags = (props: TagsProps) => {
    const { className, tagData, parentIndex } = props

    return (
        <div className={`${className}-tags-container d-flex flex-wrap`}>
            {tagData.map((elem, i) => {
                return (
                    <span
                        key={`tag-${parentIndex}-${i}`}
                        className={`${className}-tag`}
                        style={{
                            margin: "3px 10px 3px 0",
                            padding: "5px 10px 5px 10px"
                        }}
                    >
                        {elem}
                    </span>
                )
            })}
        </div>
    )
}
export default Tags
