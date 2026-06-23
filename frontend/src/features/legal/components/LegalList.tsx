export default function LegalList() {
    const arr = Array.from({length: 20})

    return (
        <ul className="px-50 py-2 grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {arr?.map((doc, docIndex) => {
                return (
                    <li
                        key={docIndex}
                        className="pb-8"
                    >
                        <div className="py-5 px-10 flex justify-center items-center bg-blue-soft  rounded-md">
                            A
                        </div>
                        <h2 className="mt-2 font-semibold text-2xl">Terms of Service</h2>
                        <span className="mb-5 text-sm text-gray-disable">Cập nhật lúc: 10h05 26/06/2026</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore quam incidunt consequatur repellat quasi cum sapiente explicabo. Ea delectus voluptas iste quibusdam magnam debitis veniam ipsa repellendus earum praesentium!</p>
                    </li>
                )
            })}
        </ul>
    )
}