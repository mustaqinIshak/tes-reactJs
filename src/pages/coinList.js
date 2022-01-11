import {useEffect, useState} from 'react'
import instance from '../config'
import Table from "../components/table";

export default function CoinList () {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        instance.get('coins/')
        .then(function (res) {
            return res.data
        })
        .then(function (res) {
            setData(res)
            setLoading(false)
            console.log(res)
        })
        .catch( function (err) {
            setLoading(false)
            console.log(err)
        })
    }, [])
    return (
        <>
            <div className="text-slate-400">
                Coin List
            </div>
            <div>
                {
                    loading ?
                    <span>loading</span>
                    : <Table data={data} />
                }
                {/* <Table data={data} /> */}
            </div>
        </>
    )
}