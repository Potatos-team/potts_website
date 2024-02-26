import TablePetition from '../ReusableComponents/Table'



export default function Petition() {
    return (
        <div >
                <div class="px-10">
                    <div className="my-10 lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Petições
                            </h2>
                        </div>
                    </div>

                    <TablePetition />
                </div>
        </div>
    )
}
