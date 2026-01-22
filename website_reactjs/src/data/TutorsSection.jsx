// /* eslint-disable react-refresh/only-export-components */

// 1. Menggunakan objek yang lebih terstruktur (memisahkan text dari HTML)
// Ini memudahkan jika nanti ingin mengganti styling tanpa menyentuh data.
export const TutorsSection = {
    title: "Tutors",
    subtitle: "Our Top Tutors",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio!"
};

// 2. Data List dengan penamaan properti yang lebih standar
export const tutorsList = [
    {
        id: 1,
        name: "Jason Lee Scott",
        role: "Senior Developer", // Menambahkan role agar data lebih lengkap
        image: "https://dfu1k3y1rami2.cloudfront.net/wp-content/uploads/2014/07/26195109/2020_cb.jpg"
    },
    {
        id: 2,
        name: "John Doe",
        role: "UI/UX Designer",
        image: "https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg"
    },
    {
        id: 3,
        name: "Michael Dell",
        role: "DevOps Engineer",
        image: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3021752-inline-i-1-why-square-designed-its-new-offices-to-work-like-a-city.jpg"
    },
    {
        id: 4,
        name: "Bruce Wills",
        role: "Project Manager",
        image: "https://blogs-images.forbes.com/jackkelly/files/2019/06/Jack-Kelly_avatar_1559658819-400x400.jpg"
    }
];