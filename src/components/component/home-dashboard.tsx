"use client"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { ResponsiveBar } from "@nivo/bar"
import { CardContent, Card } from "@/components/ui/card"

export function HomeDashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <div>
            <h3 className="text-2xl font-bold">1,234</h3>
            <p className="text-gray-500 dark:text-gray-400">Colaboradores</p>
          </div>
          <UsersIcon className="h-8 w-8 text-orange-500" />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <div>
            <h3 className="text-2xl font-bold">456</h3>
            <p className="text-gray-500 dark:text-gray-400">Empresas</p>
          </div>
          <BuildingIcon className="h-8 w-8 text-orange-500" />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <div>
            <h3 className="text-2xl font-bold">789</h3>
            <p className="text-gray-500 dark:text-gray-400">EPIs</p>
          </div>
          <ShieldIcon className="h-8 w-8 text-orange-500" />
        </div>
      </div>
      <div className="col-span-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Colaboradores por Departamento</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">Filtrar por:</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ti">TI</SelectItem>
                <SelectItem value="rh">RH</SelectItem>
                <SelectItem value="financeiro">Financeiro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <GroupedbarChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <StackedbarChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function BuildingIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function GroupedbarChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        groupMode="grouped"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A grouped bar chart"
      />
    </div>
  )
}


function ShieldIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function StackedbarChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A stacked bar chart"
      />
    </div>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
