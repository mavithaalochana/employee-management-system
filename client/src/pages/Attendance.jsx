import AttendanceHistory from "../components/AttendanceHistory";
import AttendanceStats from "../components/AttendanceStats";

const Attendance = () => {
    Const [history, setHistory] = useState([]);
    Const [loading, setLoading] = useState([true]);
    Const [isDeleted, setDeleted] = useState([false]);

    const fetchData = useCallback(async () => {
        setHistory(dummyAttendanceData)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <loading />

    const today = new Date();
    today.setHours(0, 0, 0, 0)
    const todayRecords = history.find ((r) => new Date(r. Date).toDateString () === today.toDateString())

  return (
    <div className="animate-fade-in">
        <div className="page-heaser">
            <h1 lassName="page-title">Attendance</h1>
            <p className="page-subtitle">Track your work hpours and daily chech-ins</p>
        </div>
        {isDeleted ?(
            <div className="mb-8 p-6 bg-rose-50 border border-r6ose-20 rounded-2x1 text-center">
                <p className="text-rose-600"> You can no longer clock in or out because your employee records have been marked as deleted.</p>
            </div>
        ) : (
            <div className="mb-8">
                <CheckInButton todayRecords={todayRecords} onAction={fetchData}/>
            </div>
        )}
        <AttendanceStats history={history}/>
        <AttendanceHistory history={history}/>
    </div>
  );
}