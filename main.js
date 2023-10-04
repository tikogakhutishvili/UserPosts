const MainBox = document.getElementById("main");
//// https://jsonplaceholder.typicode.com/users (username)
/// https://jsonplaceholder.typicode.com/posts   (userId)

const Userslist = document.createElement("ul");
const PostsBox = document.createElement("div");
PostsBox.style.width = "60vh"
PostsBox.style.height = "auto"
PostsBox.style.display = "grid"
PostsBox.style.alignItems = "start"
let names = document.createElement("h2")
let Title = document.createElement("h2")
names.innerHTML = "Usernames"
Title.innerHTML = "News Feed"

async function Users(){
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    return data;
}

async function Posts(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    return data;
    }
    



   async function getUserNames(){
        let user = await Users();
        user.map(item => {
            let User = document.createElement('li');
            User.innerHTML = item.name;
            Userslist.appendChild(User);
            User.addEventListener('click', () => {
                    User.style.fontWeight = "700"
                    User.style.textDecoration = "underline"
                    User.style.color = "darkblue"

                OnUserClick(item.id)
            })
            })
    }

    getUserNames()
    
    
    
    
    
    async function getPosts(){
        let showPosts = await Posts()
        return showPosts.map(item => {
            const Posts = document.createElement("div");
            Posts.style.border = "2px solid Black"
            PostsBox.style.gap = "30px"
            const title = document.createElement("h3")
            const paragraph = document.createElement("p")
            title.innerHTML = item.title
            paragraph.innerHTML = item.body
            Posts.appendChild(title)
            Posts.appendChild(paragraph)
            PostsBox.appendChild(Posts);
        }) 
    }

getPosts()




async function OnUserClick(userid){
    let posts = await Posts();
       let filteredPosts =  posts.filter((post) => post.userId === userid)
       PostsBox.innerHTML = ''
       PostsBox.appendChild(Title)
       filteredPosts.map((post) => {
           const Posts = document.createElement("div");
            const title = document.createElement("h3");
            const paragraph = document.createElement("p");
            Posts.style.border = "2px solid Black"
            PostsBox.style.gap = "30px"
            title.innerHTML = post.title;
            paragraph.innerHTML = post.body;
            Posts.appendChild(title);
            Posts.appendChild(paragraph);
            PostsBox.appendChild(Posts);
        });
    }
   

Userslist.appendChild(names)
PostsBox.appendChild(Title)
MainBox.appendChild(Userslist)
MainBox.appendChild(PostsBox)