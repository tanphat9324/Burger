const burgerState={
    burger:{salad: 0,cheese:0, beef:0},
    menu:
    {
        salad:10,
        cheese:10,
        beef:10
    },
    total:40
}

export const ThanhToanBurger = (state=burgerState,action)=>{

switch(action.type){
    case 'TANG_GIAM':{
          let gioHangCapNhat={...state.burger};
       
        if(action.tangGiam){
            gioHangCapNhat[action.loai]+=1;
        }else{
            if(gioHangCapNhat[action.loai]>=1){
                gioHangCapNhat[action.loai]-=1;
            }
        }
        state.burger=gioHangCapNhat;
        return{...state}
    }
    case 'TONG':{
        let soLuong={...state.burger};
        soLuong=Object.values(soLuong); //Mang so luong burger (salad,cheese,beef)
        
        let gia={...state.menu};
        gia=Object.values(gia); // Mang gia cua tung thanh phan
        
        let tong=soLuong.map((tp, i) => tp * gia[i]);
        tong=tong.reduce((a, b) => a + b, 0)
        let gioHangCapNhat={...state.total};
        gioHangCapNhat=tong;
        state.total=gioHangCapNhat;        
        return {...state}
    }
    default:
            return {...state}
}
}