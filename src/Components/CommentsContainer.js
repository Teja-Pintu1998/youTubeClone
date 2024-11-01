import React from "react";

const commentsData = [
  {
    name: "Teja 1",
    text: "nvchhdhadbcakjd",
    replies: [
      {
        name: "Teja",
        text: "nvchhdhadbcakjd",
        replies: [
          {
            name: "Teja",
            text: "nvchhdhadbcakjd",
            replies: [
              {
                name: "Teja",
                text: "nvchhdhadbcakjd",
                replies: [
                  {
                    name: "Teja",
                    text: "nvchhdhadbcakjd",
                    replies: [
                      {
                        name: "Teja",
                        text: "nvchhdhadbcakjd",
                        replies: [
                          {
                            name: "Teja",
                            text: "nvchhdhadbcakjd",
                            replies: [
                              {
                                name: "Teja",
                                text: "nvchhdhadbcakjd",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Teja 2",
    text: "nvchhdhadbcakjd",
    replies: [
      {
        name: "Teja",
        text: "nvchhdhadbcakjd",
        replies: [
          {
            name: "Teja",
            text: "nvchhdhadbcakjd",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Teja 3",
    text: "nvchhdhadbcakjd",
    replies: [
      {
        name: "Teja",
        text: "nvchhdhadbcakjd",
        replies: [
          {
            name: "Teja",
            text: "nvchhdhadbcakjd",
            replies: [],
          },
        ],
      },
    ],
  },
  { name: "Teja 3", text: "nvchhdhadbcakjd", replies: [] },
];
console.log(commentsData);

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-sm my-2">
      <img
        className="w-12 h-12"
        src="https://i.pinimg.com/564x/9e/5b/c0/9e5bc04372764479079dcbd8f0196318.jpg"
        alt="user_img"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// const CommentsList = ({ comments }) => {
//   return comments.map((comment, index) => (
//     <div>
//       <Comment data={comment} key={index} />
//       <div className="pl-5 border-l-black ml-5">
//         {/* here we render the replies which are just the multiple comments once again */}
//         <CommentsList comments={comment.replies}/>
//       </div>
//     </div>
//   ));
// };
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 ? (
        <div className="pl-5 border-l-black ml-5">
          {/* here we render the replies which are just the multiple comments once again */}
          <CommentsList comments={comment.replies} />
        </div>
      ) : (
        <h2 className="font-bold text-xl">No Replies yet:</h2>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
