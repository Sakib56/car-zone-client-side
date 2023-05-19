import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    console.log(user.email)


    useEffect(() => {
        fetch(`http://localhost:5000/toysByEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data)
            })
    }, [])

    const handleToyDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/toyDelete/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                            }
                            const remainingToys = myToys.filter(toy => toy._id !== _id)
                            console.log(remainingToys)
                            setMyToys(remainingToys)
                        })
                }
            })

    }

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-lg">SL</th>
                            <th className="text-lg">Toys Picture <br /> Name,Category</th>
                            <th className="text-lg">Price & Rating <br />
                                Available Quantity
                            </th>
                            <th className="text-lg">seller Info</th>
                            <th className="text-lg">Update</th>
                            <th className="text-lg">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map((toy, index) => <MyToysRow
                                key={toy._id}
                                toy={toy}
                                index={index + 1}
                                handleToyDelete={handleToyDelete}
                            >
                            </MyToysRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;