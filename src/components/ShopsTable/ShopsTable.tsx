'use client'

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from 'react';
import { ColDef } from 'ag-grid-community';
import { getShops } from '@/service/service';
import { Shop } from '@/service/models';
import cn from 'classnames';
import styles from './ShopsTable.module.scss';
import 'ag-grid-enterprise';
import Link from 'next/link';

export const ShopTable = () => {
    const [rowData, setRowData] = useState<Shop[]>([]);
    
    const [colDefs] = useState<ColDef[]>([
        { headerName: 'Название', field: "name", rowDrag: true, flex: 1, cellRenderer: LinkToShop, enableRowGroup: false},
        { headerName: 'Площадка', field: "place" },
        { headerName: 'Статус', field: "status" },
        { headerName: 'Управляющие', field: "managers", valueFormatter: ({value}) => (value ? value.join(', ') : '') },
        { headerName: 'Юридическое лицо', field: "legalPerson", flex: 1 }
    ]);

    useEffect(() => {
        getShops().then((shops: Shop[]) => {
            console.log(shops);
            setRowData(shops);
        })
    }, [])

    return (
        // wrapping container with theme & size
        <div className={cn("ag-theme-quartz", styles.tableDiv)}>
            <AgGridReact
                defaultColDef={{floatingFilter: true, filter: true, enableRowGroup: true}}
                rowGroupPanelShow='always'
                rowData={rowData}
                columnDefs={colDefs}
                rowDragManaged={true}
            />
        </div>
    )  
}

const LinkToShop = ({data}: {data: Shop}) => {
    if (!data) {
        return null;
    }
    return <Link href={`/shop/${data.id}`}>
        {data.name}
    </Link>
}