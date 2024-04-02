import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectsMarks = [
        { "id": 1, "name": "John", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 82 },
        { "id": 2, "name": "Alice", "math_marks": 75, "physics_marks": 80, "chemistry_marks": 75 },
        { "id": 3, "name": "Michael", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 88 },
        { "id": 4, "name": "Emily", "math_marks": 70, "physics_marks": 72, "chemistry_marks": 68 },
        { "id": 5, "name": "David", "math_marks": 80, "physics_marks": 76, "chemistry_marks": 78 },
        { "id": 6, "name": "Sophia", "math_marks": 88, "physics_marks": 90, "chemistry_marks": 85 },
        { "id": 7, "name": "Ethan", "math_marks": 82, "physics_marks": 78, "chemistry_marks": 80 },
        { "id": 8, "name": "Olivia", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 79 },
        { "id": 9, "name": "James", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90 },
        { "id": 10, "name": "Emma", "math_marks": 86, "physics_marks": 84, "chemistry_marks": 87 }
      ]      
      
    return (
        <div>
            <LChart width={800} height={400} data={subjectsMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='red' />
                <Line dataKey={'physics_marks'} stroke='green' />
                <Line dataKey="chemistry_marks" stroke='purple' />
            </LChart>
        </div>
    );
};

export default LineChart;