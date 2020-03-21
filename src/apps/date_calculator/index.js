import React from 'react'

import { Input } from 'mdui-in-react'
import { calDiffer, calWhichDay } from './engine'

class Ui extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateEarly:'',
            dateLate:'2020-10-09',
            dateStart:'2020-01-06',
            day:10,
            diffDay:0,
            whichDay:''
        }
    }
    componentDidMount() {
        var time = new Date();
        var day = ("0" + time.getDate()).slice(-2);
        var month = ("0" + (time.getMonth() + 1)).slice(-2);
        var today = time.getFullYear() + "-" + (month) + "-" + (day);
        this.setState({
            dateEarly:today,
            dateStart:today
        })
    }
    render(){
        const { dateEarly, dateLate, dateStart, day, diffDay, whichDay } = this.state
        return (
            <>
                <div className="mdui-card mdui-p-a-1">
                    <p className="mdui-typo-title">日期间隔</p>                
                    <Input
                        onValueChange={newText=>{
                            this.setState({dateEarly:newText})
                        }}
                        header="从"
                        placeholder=" "
                        icon="date_range"
                        type="date"
                        value={dateEarly}
                    /> 
                    <Input
                        onValueChange={newText=>{
                            this.setState({dateLate:newText})
                        }}
                        header="到"
                        placeholder=" "
                        icon="date_range"
                        type="date"
                        value={dateLate}
                    />  
                    <p style={{display:(diffDay === 0)?'none':'block'}} className="mdui-typo-title mdui-text-center">
                    <small>相差</small>{diffDay}<small>天</small>
                    </p>
                    <button 
                        onClick={()=>{
                            this.setState({diffDay:calDiffer(dateEarly, dateLate)})
                        }}
                        className="mdui-color-theme mdui-btn-raised mdui-ripple mdui-btn mdui-float-right">
                        计算
                    </button>
                </div>
                <br></br>
                <div className="mdui-card mdui-p-a-1">
                    <p className="mdui-typo-title">日期推算</p>
                    <Input
                        onValueChange={newText=>{
                            this.setState({dateStart:newText})
                        }}
                        header="从"
                        placeholder=" "
                        icon="date_range"
                        type="date"
                        value={dateStart}
                    /> 
                    <Input
                        onValueChange={newText=>{
                            this.setState({day:newText})
                        }}
                        header={`${Math.abs(day)}天之${day >= 0?"后":"前"}`}
                        icon={day >= 0?"fast_forward":"fast_rewind"}
                        type="number"
                        value={day}
                    />    
                    <p style={{display:(whichDay === '')?'none':'block'}} className="mdui-typo-title mdui-text-center">
                        {whichDay}
                    </p>
                    <button 
                        onClick={()=>{
                            var res = calWhichDay(dateStart, day)
                            const weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                            var week = weeks[res.week]
                            this.setState({whichDay:`${res.date} ${week}`})
                        }}
                        className="mdui-color-theme mdui-btn-raised mdui-ripple mdui-btn mdui-float-right">
                        计算
                    </button>
                </div>            
            </>
        )
    }
}

export default Ui