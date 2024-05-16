'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image"
import logo from '../../../../img/safetyPNG.png'
import React, { useState } from "react";
import avatar from '../../../../img/image-body.png'
import Link from "next/link";

export function HeaderDashboard() {

  const [isOpen, setIsOpen] = useState(false)
  const userName = 'David'
  const userImage = avatar

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white-700 border-b flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <Image
          alt="Logo"
          src={logo}
          width={120}
        />
      </div>
      <div className="relative inline-block">
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">Olá, {userName}</span>
          <Image
            src={userImage}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Conta</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Configurações</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer"><Link href={'/'}>Sair</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}