import { useState } from "react/cjs/react.development"
import {MdSearch} from "react-icons/md"

export default function Table({data}) {
    const category = Object.keys(data[0])
    return(
        <div className="flex flex-col justify-center px-10 py-5 mt-8 bg-slate-50 rounded-lg overflow-y-scroll">
            <span className="text-sky-700 font-semibold text-md">
                Coin List
            </span>
            <div className="flex flex-row my-10 gap-5">
                <div className="mb-3 xl:w-64">
                    <select className="form-select form-select-lg mb-3
                        appearance-none
                        block
                        w-full
                        px-4
                        py-2
                        text-xl
                        font-normal
                        text-gray-300
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                            <option className="text-gray-300" value={"#"}>Select</option>
                            {
                                category && category.map((item, index) => {
                                    return(
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })
                            }
                        </select>
                </div>
                {/* <div className="pt-2 relative text-gray-600 w-80">
                    <button className="absolute right-0 top-0 mt-5 mr-4">
                     <MdSearch />
                    </button>
                    <input className="mb-3 border-2 border-gray-300 bg-white h-10 px-4 py-2 rounded text-xl focus:outline-none w-full"
                    type="search" name="search" placeholder="Search" />
            
                </div> */}
                <div className="w-80">
                    <button className="absolute right-0 top-0 mt-5 mr-4">
                        <MdSearch />
                    </button>
                    <input type='search' className="w-full
                            px-4
                            py-2
                            text-xl
                            font-normal
                            text-gray-300
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                            aria-label=".form-select-lg example"
                            placeholder="Search"
                    >
                        
                    </input>
                </div>
                <div>
                    <button className="bg-sky-700 text-white px-4 py-2 rounded">Search</button>
                </div>
            </div>
            <div className="overflow-y-scroll h-1/2">
                <table className="w-full">
                <thead>
                    <tr className="px-10">
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Id
                        </th>
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Name
                        </th>
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Symbol
                        </th>
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Rank
                        </th>
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Type
                        </th>
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Active
                        </th>
                        <th className="px-5 py-3 border-b-2 bg-sky-700 text-left text-xs font-semibold text-slate-50">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data 
                        ? 
                        data.map((item, index) => {
                            console.log(index % 2 ? true : false)
                            return(
                                <tr className={index % 2 ? "bg-gray-100 " : "bg-gray-50"} key={index}>
                                    <td className='px-5 py-3 text-sm text-sky-700  font-light '>
                                        {item.id}
                                    </td>
                                    <td className='px-5 py-3 text-sm text-gray-900 font-light '>
                                        {item.name}
                                    </td>
                                    <td className='px-5 py-3 text-sm text-gray-900 font-light '>
                                        {item.symbol}
                                    </td>
                                    <td className='px-5 py-3 text-sm text-gray-900 font-light '>
                                        {item.rank}
                                    </td>
                                    <td className='px-5 py-3 text-sm text-gray-900 font-light '>
                                        {item.type}
                                    </td>
                                    <td className='px-5 py-3 text-sm text-gray-900 font-light '>
                                        {item.is_active === true ? 
                                            <span>True</span>
                                        :
                                            <span>False</span>
                                        }
                                    </td>
                                    <td className='px-5 py-3 text-sm text-gray-900 font-light '>
                                        <button className="bg-red-700 text-white px-4 py-2 rounded">Delete</button>
                                    </td>
                                </tr>   
                            ) 
                        })
                        :null
                    }
                </tbody>
                </table>
            </div>
        </div>

    )
}