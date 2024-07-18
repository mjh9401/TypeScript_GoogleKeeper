import { v4 } from "uuid";

const note =[
    {
        title : 'Note 1 title',
        content : 'Note 1 Content',
        tags : [{tag:"coding", id: v4()}],
        color : '#cce0ff',
        priority : 'high',
        isPinned : true,
        isRead : false,
        date : '10/12/22 2.55PM',
        createTime : new Date("Sat Dec 10 2022 14: 55:22").getTime(),
        editedTiem : null,
        id : v4(),
    },
    {
        title : 'Note 2 title',
        content : 'Note 2 Content',
        tags : [{tag:"exercise", id: v4()}],
        color : '#ffcccc',
        priority : 'high',
        isPinned : true,
        isRead : false,
        date : '10/12/22 2.55PM',
        createTime : new Date("Sat Dec 10 2022 14: 55:22").getTime(),
        editedTiem : null,
        id : v4(),
    },
]

export default note;