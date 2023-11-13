// "use client";
// import { useGlobalContext } from '@/contexts/ContextHome';
// import { useContext, useEffect } from 'react'
// import { GetServerSideProps } from 'next';
// import Api from '@/connections/api';

// type Feed = {
//     id: number
//     profileId: number
//     name: string
//     userName: string
//     photo: string
//     profileChecked: boolean
//     date: string
//     file: string
//     description: string
//     public_likes: number
//     public_comments: number
// }

// type PageProps = {
//     pubsData: Feed[]
// }

// export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
//     const res = await Api.get('/feed');
//     const data: Feed[] = await res.data;

//     return {
//         props: {
//             pubsData: data
//         }
//     };
// }

// export default function HomeFeedProps({ pubsData }: PageProps) {
//     const { data, setData } = useGlobalContext();

//     useEffect(() => {
//         setData(pubsData);
//     }, [pubsData]);
// }
