import React from "react";

const commentsData = [
  {
    name: "@Surya",
    text: "When you are happy you enjoy music. But when your are sad you understand the lyrics.",
    replies: [],
  },
  {
    name: "@Vikram",
    text: "I love this song so much. Even 5 yrs later it's still on repeat. I just can't get enough of it.",
    replies: [
      {
        name: "@Karthi",
        text: "This was my Mum’s funeral song as we entered the chapel and it just fit so perfect. It was absolutely beautiful, so thank you Calum for making this song.",
        replies: [
          {
            name: "@Parthiban",
            text: "I assume in her sleep, at the age of 52. I miss her so much and I’m fighting hard to live without her but it’s tough. Miss you so much Mum. 💔",
            replies: [
              {
                name: "@Sarath kumar",
                text: "This song never gets old. The voice makes me calm when I'm anxious or stressed (though it's a song about love lol).",
                replies: [
                  {
                    name: "@Prakash raj",
                    text: "Without fail, this song makes me cry, EVERY SINGLE TIME I LISTEN TO IT",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "@Venkat",
            text: "When I heard  a few words of this song, on a jewelry commercial.  I knew it was a beautiful song. Now I play it on my piano and it always gets me. Absolutely amazing voice and artist, this is truly a top ten for me always 😊",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "@Siva",
    text: "I love this song it always make me cry!😢 I am a 13 year old girl i fighted cancer. I had lost all my hair but I prayed so hard he listen to me crying and praying.",
    replies: [],
  },
  {
    name: "@Dhanush",
    text: "I keep coming back to this song everytime I see the keychain a good friend of mine once gave me. It has the spotify barcode which when scanned takes us to this song. So many memories and happiness together. Makes me tear up everytime 💚",
    replies: [],
  },
  {
    name: "@Simbu",
    text: "He has made it to number one on my love song list. Amazing and awesome  song and great lyrics ❤",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-2 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="h-[40px] w-[40px]"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="mx-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, idx) => (
    <div key={idx} >
      <Comment data={comment} />
      <div className="border border-l-black ml-10">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-[60%] ml-24">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
