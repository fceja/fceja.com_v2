import "@scss/common/components/Tags.scss"

interface TagsProps {
    tagData: string[],
    parentIndex: number
}

const Tags = (props: TagsProps) => {
    const { tagData, parentIndex } = props

    return (
        <div className="tags my-3 d-flex flex-wrap">
            {tagData.map((elem, i) => {
                return < span key={`tag-${parentIndex}-${i}`} className="p-2 m-1">{elem}</span>
            })}
        </div>
    )
}
export default Tags