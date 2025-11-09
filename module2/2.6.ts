{

//constraints

const addCourseToStudent = <T extends {id: number; name: string, email: string}>(student: T) => {
    const course = 'next level web development'
    
    return{
        ...student,
        course
    }
}

const student3 = addCourseToStudent({
    id: 3,
    name: 'mr.z',
    email: 'z@gmail.com',
    emni: 'emni',
})

const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 1,
    name: 'mr.x', 
    email: 'x@gmail.com', 
    devType: 'NLWD'
})

const student2 = addCourseToStudent({
    id: 2,
    name: 'mr.y', 
    email: 'y@gmail.com', 
    hasWatch: 'Apple'
})













































}