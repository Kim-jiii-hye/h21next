export default function ItemThumbnail({data}) {
    return (
        <div className="image_thumbnail" style={{ backgroundImage: `url(${data})` }}>
            <div className="image_ratio"></div>
        </div>
    )
}