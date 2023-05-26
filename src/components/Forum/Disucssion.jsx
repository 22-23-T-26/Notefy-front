import React from 'react'
import CommentList from '../Comments/CommentList';
const testData = [
    {
        id: 1,
        createdBy: "Admin Administrator",
        text: 'Comment 1',
        replies: [
            {
                id: 2,
                text: `
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic corrupti ab non, iure ut perferendis molestiae reprehenderit incidunt nostrum labore explicabo numquam enim autem natus placeat cum cumque deserunt!
                Quasi, commodi. Minus, deserunt adipisci fugiat, earum ab temporibus iusto officia ipsum, sunt cupiditate laudantium provident cum aut voluptas! Quaerat nesciunt, quidem sunt veritatis necessitatibus libero fuga alias corporis saepe.`,

                createdBy: "Admin Administrator",
                replies: [],
            },
            {
                id: 3,
                text: 'Comment 1.2',
                createdBy: "Admin Administrator",
                replies: [
                    {
                        id: 4,
                        createdBy: "Admin Administrator",
                        text: 'Comment 1.2.1',
                        replies: [],
                    }
                ],
            }
        ],
    },
    {
        id: 5,
        createdBy: "Admin Administrator",
        text: 'Comment 2',
        replies: [],
    }
];
const Disucssion = () => {
    return (
        <CommentList comments={testData} />
    )
}

export default Disucssion