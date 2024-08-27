import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
import "./table_styles.css"
export const Table = ({
    ...props
}) => {
    const rowData = [
        { id: 1, make: 'Toyota', model: 'Corolla', price: 20000 },
        { id: 2, make: 'Ford', model: 'Mustang', price: 30000 },
        { id: 3, make: 'BMW', model: '3 Series', price: 40000 },
        { id: 4, make: 'Honda', model: 'Civic', price: 22000 },
        { id: 5, make: 'Chevrolet', model: 'Malibu', price: 25000 }
    ];

    const cellRender = (params) => {
        console.log(17, params);
        return(
            <div style={{ color: "red"}}>
                Chevrolet
            </div>
        )
        
    }

    const columnDefs = [
        { headerName: 'ID', field: 'id', sortable: true, filter: true, cellRenderer: cellRender },
        { headerName: 'Make', field: 'make', sortable: true, filter: true },
        { headerName: 'Model', field: 'model', sortable: true, filter: true },
        { headerName: 'Price', field: 'price', sortable: true, filter: true, valueFormatter: params => `$${params.value.toLocaleString()}` }
    ];
    const rowClassRules = {
        "data-missing": (params) => {
          return true;
        }
      };
    return (
        <div
            className={`ag-theme-alpine `}
            style={{
                height: "80vh",
                width: "80%",
            }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={{
                    flex: 1,
                    minWidth: 100,
                    resizable: true
                }}
                rowClassRules={rowClassRules}
                suppressRowClickSelection={true}
                rowHeight={50}
            />
        </div>
    )
}