import Image from 'next/image'

export default function Article({ article }) {
  return (
    <div className="flex flex-col pt-2 w-full border-b">
      <a
        className="no-underline cursor-pointer hover:no-underline"
        href="/guides/using-express-with-vercel"
      >
        <article className="flex relative justify-between py-6 px-0 w-full text-black cursor-pointer">
          <div className="">
            <h3 className="m-0 text-2xl font-semibold tracking-tight leading-normal cursor-pointer hover:underline">
              {article.title}
            </h3>
            <p className="pr-16 mb-0 text-base font-normal text-gray-800">
              {article.description}
            </p>
          </div>
          <div className="flex flex-col flex-grow flex-shrink-0 justify-between items-end">
            <span className="text-gray-700">Created on October 3rd 2020</span>
            <div className="flex -space-x-1 items-center w-auto">
              {article.users.map((user) => {
                return (
                  <span key={article.id} className="inline-flex items-center">
                    <span className="inline-block overflow-hidden flex-shrink-0 w-6 h-6 align-top rounded-full">
                      <Image
                        key={user.id}
                        alt="okbel"
                        title="okbel"
                        src={user.avator}
                        width="24"
                        height="24"
                        className="w-full h-full opacity-100"
                      />
                    </span>
                  </span>
                )
              })}
            </div>
          </div>
        </article>
      </a>
    </div>
  )
}
