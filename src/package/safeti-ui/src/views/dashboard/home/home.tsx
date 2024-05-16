"use client"
import { ResponsiveBar } from "@nivo/bar"
import { DasboardNavBar } from '@/package/safeti-ui/src/views/dashboard/home/components/navbar'
import { HeaderDashboard } from '@/package/safeti-ui/src/views/dashboard/home/components/headerDashboard'
import { Card } from "@/components/ui/card"
import { HomeDashboard } from "@/components/component/home-dashboard"
import { AlignLeft, Archive, Desktop } from "@phosphor-icons/react"

export function DashboardHomeComponent() {
  return (
    <div className="flex h-screen bg-white ">
      <DasboardNavBar />
      <div className="flex-1">
        <HeaderDashboard />
        <div className="flex justify-between items-center bg-white p-4">
          <div className="flex">
            <AlignLeft size={40} />
            <h2 className="text-black font-bold text-xl px-2 py-2">Analytics</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg border border-gray-300">Hoje</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300">Este Mês</button>
            <button className="px-8 py-2 rounded-lg border border-gray-300">Junho 31, 2024 - Julho 30, 2024</button>
          </div>
        </div>
        <div className=" gap-3 p-3">
          <HomeDashboard />
        </div>
        <div className="flex justify-between p-4 py-[2%]">
          <div className="border border-gray-200 p-4 rounded-lg shadow-md w-1/3 ">
            <h2 className="text-lg font-semibold text-gray-800">Registros</h2>
            <p className="text-sm text-gray-500">Total de colaboradores que possuem epi cadastrado</p>
            <div className="flex items-center  justify-between mt-4 py-4">
              <h3 className="text-4xl font-bold text-orange-500">80%</h3>
              <div className="ml-2"><Desktop size={32} color="#ff5b27" /></div>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg shadow-md w-1/3">
            <h2 className="text-lg font-semibold text-gray-800">Devoluções</h2>
            <p className="text-sm text-gray-500">Total de colaboradores que devolveram epi cadastrado</p>
            <div className="flex items-center justify-between mt-4 py-4">
              <h3 className="text-4xl font-bold text-orange-500">50%</h3>
              <div className="ml-2"><Archive size={32} color="#ff5b27" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
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
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}

