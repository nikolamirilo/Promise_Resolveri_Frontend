"use client"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import React, { useMemo, useRef, useState } from "react"
import { BiSolidLike } from "react-icons/bi"
import { FaUndoAlt, FaUserCircle } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import TinderCard from "react-tinder-card"
import { matching } from "../actions/server/users"

function CardsContainer({ type, users }) {
  const { user } = useUser()
  if (users) {
    const [currentIndex, setCurrentIndex] = useState(users.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
      () =>
        Array(users.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )

    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }

    const canGoBack = currentIndex < users.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = async (direction, matchingUser, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
      if (direction == "right") {
        await matching(user.id, matchingUser, type)
      }
    }

    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
      // TODO: when quickly swipe and restore multiple times the same card,
      // it happens multiple outOfFrame events are queued and the card disappear
      // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir, matchingUser) => {
      if (canSwipe && currentIndex < users.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }

    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
    }

    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="cardContainer">
          {users &&
            users.map((item, index) => {
              return (
                <TinderCard
                  ref={childRefs[index]}
                  preventSwipe={["down", "up"]}
                  key={item.full_name}
                  onSwipe={(dir) => swiped(dir, item.uid, index)}
                  onCardLeftScreen={() => outOfFrame(item.full_name, index)}
                  className={`swipe cursor-pointer`}>
                  <div style={{ backgroundImage: "url(" + item.image + ")" }} className="card">
                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-2">
                      <div className="flex flex-col items-start justify-end">
                        <div className="flex flex-row font-bold">
                          <h3 className="shadow-text">{item.full_name}</h3>,
                          <span className="shadow-text"> {item.age}</span>
                        </div>
                        <span className="shadow-text">{item.location}</span>
                      </div>
                      <Link href={`/users/${item.uid}`}>
                        <FaUserCircle size={30} className="hover:fill-violet-600" />
                      </Link>
                    </div>
                  </div>
                </TinderCard>
              )
            })}
          {currentIndex == -1 && (
            <div className="font w-full py-10 text-center text-2xl">
              You swiped through all users
            </div>
          )}
        </div>
        <div
          className={`rounded-bottom flex w-full max-w-[360px] flex-row items-center justify-around bg-black py-2 ${
            currentIndex == -1 && "hidden"
          }`}>
          <button onClick={() => swipe("left")}>
            <FaXmark size={40} color="red" />
          </button>
          <button style={{ backgroundColor: !canGoBack }} onClick={() => goBack()}>
            <FaUndoAlt size={30} />
          </button>
          <button onClick={() => swipe("right")}>
            <BiSolidLike size={40} color="blue" />
          </button>
        </div>
      </div>
    )
  }
}
export default CardsContainer
