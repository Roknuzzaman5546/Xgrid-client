import { useEffect, useState } from "react";


const ManegeProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // const [hotel, refetch] = useHotel();
    // const { user } = useContext(AuthContext)
    // const axiosPublic = UseaxiosPublic();

    // const handleHotelDelete = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosPublic.delete(`/hotel/${id}`)
    //                 .then((res) => {
    //                     refetch();
    //                     console.log(res.data)
    //                     if (res.data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     })
    // }

    const handleUpdate = () => {

    }
    const handleDelete = () => {

    }

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" my-7 text-4xl font-bold font-mono ">Hey <span className=" text-[#2578B4]">{"Rokon khan"}</span> Please update & delete Hotel</h2>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    products.slice(0,6).map(item => <div key={item.id}>
                        <div className="h-60 flex justify-center gap-2 bg-base-100 shadow-xl rounded-xl mb-5">
                            <img className=" rounded-lg md:w-[43%] w-[50%] h-60" src={item.image} alt="Album" />
                            <div className=" w-full flex flex-col justify-center gap-2">
                                <h2 className=" text-xl font-bold font-sans col-span-1">{item.title}</h2>
                                <h2 className=" text-xl font-bold font-sans col-span-1">place: {item.place}</h2>
                                <p className=" text-xl font-bold font-mono">Cost:{item.price}</p>
                                <div className="card-actions justify-end items-end">
                                    <button className="btn btn-warning btn-outline mb-2" onClick={() => handleDelete(item._id)}>Delete</button>
                                    <button className="btn btn-warning btn-outline mb-2 mr-2" onClick={() => handleUpdate(item._id)}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManegeProducts;
