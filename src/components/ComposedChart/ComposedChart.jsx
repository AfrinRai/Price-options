import { ComposedChart as ComChart, Line, XAxis, YAxis, Bar, Area , Legend, Tooltip} from 'recharts';

const ComposedChart = () => {

    const flowers = [
        { "id": 1, "name": "John", "rose": 7, "tulip": 5, "daisy": 9, "sunflower": 6 },
        { "id": 2, "name": "Alice", "rose": 8, "tulip": 6, "daisy": 7, "sunflower": 9 },
        { "id": 3, "name": "Michael", "rose": 6, "tulip": 7, "daisy": 8, "sunflower": 5 },
        { "id": 4, "name": "Emily", "rose": 5, "tulip": 8, "daisy": 6, "sunflower": 7 },
        { "id": 5, "name": "David", "rose": 9, "tulip": 6, "daisy": 7, "sunflower": 8 },
        { "id": 6, "name": "Sophia", "rose": 7, "tulip": 9, "daisy": 8, "sunflower": 6 },
        { "id": 7, "name": "Ethan", "rose": 8, "tulip": 7, "daisy": 6, "sunflower": 9 },
        { "id": 8, "name": "Olivia", "rose": 6, "tulip": 8, "daisy": 9, "sunflower": 7 },
        { "id": 9, "name": "James", "rose": 9, "tulip": 7, "daisy": 6, "sunflower": 8 },
        { "id": 10, "name": "Emma", "rose": 7, "tulip": 6, "daisy": 8, "sunflower": 9 }
      ]
      
    return (
        <div>
            <h3 className="text-2xl font-bold mb-10">Here is an example of composed chart in below :-</h3>
            <ComChart width={900} height={250} data={flowers} className='ml-10 mb-10'>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Legend />
                <Tooltip></Tooltip>
                <Area dataKey={'sunflower'} fill='#8884d8' stroke="#8884d8"></Area>
                
                <Bar dataKey={'rose'} fill='red' barSize={20}></Bar>
                {/* <Bar dataKey={'tulip'} fill='#ff0090' barSize={20}></Bar> */}
                <Bar dataKey={'daisy'} fill='green' barSize={20}></Bar>
                {/* <Bar dataKey={'sunflower'} fill='gold' barSize={20}></Bar> */}

                <Line dataKey={'rose'} stroke='red'></Line>
                {/* <Line dataKey={'tulip'} stroke='#ff0090'></Line> */}
                <Line dataKey={'daisy'} stroke='green'></Line>
                {/* <Line dataKey={'sunflower'} stroke='gold'></Line> */}
            </ComChart>
        </div>
    );
};

export default ComposedChart;