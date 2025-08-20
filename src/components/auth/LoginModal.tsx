"use client"

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import Image from 'next/image'

function LoginModal() {
  return (
    <Dialog>
  <DialogTrigger asChild>
     <Button>Getting Start</Button>
    </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='text-2xl'>Welcome to ChitChat</DialogTitle>
      <DialogDescription>
        ChitChat makes it effortless to create secure chat links and start conversations in seconds.
      </DialogDescription>
    </DialogHeader>
    <Button variant="outline">
      <Image className='mr-4' width={25} height={25} src="/images/google.png" alt='google_logo'></Image>
      Continue With Google
    </Button>
  </DialogContent>
</Dialog>
  )
}

export default LoginModal