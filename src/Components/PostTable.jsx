

const PostTable = ({ post }) => {
    const { postTitle, thumbnail, needPeoples, location, category, deadline } = post
    return (
        <div>
            {/* row 1 */}
            <tr>
                <td>

                    <div className="mask mask-squircle w-12 h-12">
                        <img src={thumbnail} alt="" />
                    </div>
                </td>
                <td>
                    <div className="font-bold">{category}</div>
                </td>
                <td>
                    {needPeoples}

                </td>
                <td>{location}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default PostTable;