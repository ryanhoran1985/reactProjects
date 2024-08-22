import React from 'react'

function Card({ username = 'kyote', post = 'not assigned yet'}) {

  //  console.log(props)
  return (
    <div>
       <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBPv6YQl_N3gBTO9j_NTVlOUkL-iYE9Bs_w&s" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo consequuntur voluptate rem sunt et sequi officia eius dolores alias tenetur doloremque, totam ipsa quod eos atque corrupti quos esse?
            </p>
            </blockquote>
            <figcaption>
            <div>
                {username}
            </div>
            <div>
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card