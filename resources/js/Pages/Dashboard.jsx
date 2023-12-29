import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, posts }) {

    console.log(posts);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="flex items-center justify-between">
                            <div>
                                <select
                                    name="perpage"
                                    id="perpage"
                                    className="rounded-lg bg-white dark:bg-gray-900">
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select>
                            </div>
                            <div>
                                <form action="">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="">Search : </label>
                                        <TextInput
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <table className='w-full'>
                            <thead className='border-b-2'>
                                <tr className='bg-gray-50'>
                                    <th className='p-2'>No.</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.data.map((post, index) => (
                                    <tr key={post.id}>
                                        <td className='text-center p-2'>{posts.from + index}</td>
                                        <td>{post.title}</td>
                                        <td className='text-center'>{post.author.name}</td>
                                        <td className='text-center'>edit | delete</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='flex items-center justify-between my-4'>
                            <div>
                                Showing {posts.from} to {posts.to} total {posts.total}
                            </div>
                            <div className='flex items-center gap-2'>
                                {posts.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className='bg-blue-900 text-white p-2'>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
