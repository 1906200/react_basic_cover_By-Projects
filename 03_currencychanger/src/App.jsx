import { InputBox } from './Components'
import useCurrencyInfo from './Hooks/usecurrencyInfo'
import './App.css'
import { useState } from 'react'

function App() {

  const [ammount, setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTO] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTO(from)
    setConvertedAmount(ammount)
    setAmount(convertedAmount)
  }

 const convert = () =>{

  setConvertedAmount(ammount * currencyInfo[to])

 } 
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQIDAAEGBwj/xABFEAACAQMCAwUGAQoEAwkBAAABAgMABBESIQUxQRNRYXGBBhQiMpGh0RUjM0JSYnKCseFDU5LBRIOiFiRUc5Oj0vDxB//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIxEAAgIBBAICAwAAAAAAAAAAAAECERIDITFBE1EiYQQUQv/aAAwDAQACEQMRAD8A7PhHGJocAvtjrXVWHEFulwWQPivLeG+1nB71xGzG3lOMLJyJPjyrqoJDA4Kcwdj0rN/R1uKkdlIjMNmA9Kqms4poyGUZ8RSm04uyn86cknkdqYpxBZX0RgE9Rq/tU7EYzXBTHw9Y2bIXSRsDWxbJGRgqznkCeVE9oJFxIjfXNUMsaN8MD+YFTSKyb5BpLRixGCeu3KrbZZtWAAFFWm/WMfEjxJjYkUM/EpFQ/CWDHnjkKNh/JhkUSsX21GtqZYE2XV59Kna3MDRDDaTzPSiDpPXUOe1Ul2ZOW+4sl4jcDlFgUNLxC5O+CB4Cm7xxO+k7HGdqAu4iNkDY6U7ZUXEUXd00vz86XSDUc0xubaQn5TVEVkxf4sgUjbgDNsWGRUoYlXOo5NHuiRtjTtQr6AxOmmI1iNVOF3rAAwwBWZVhsDVZ1qdtqYghVCr31JXHSh9WQATVilQu2c0wLgWfYYHnVcqbH4qpZpB8tVdsx2agRp9IJ3oSQgGimAbnVEkWDtTTCipF1msdMbCrok225itEGqsVA4iPdUuzqbHFQyaAPGhCy7KQAT0r0z2D9pIp7W34PfSlLqMYieXlIn7IPeNufSvOLWT85g4U45NRmBNvpTVz+HnXMp0aKJ7ksLo4OAd+tLuNe1ltYRzRtHEZ4lJ0yKy58m7vxpd7Jceh49wSXh3FrrTPDGe3kZuzZowRv99z+NKfaG0Z+04fwuRLrhRTIRmdngYb5VmHqVJx61dpol2dz7L+1Scas2ktSymPTlJh1IzjNOTxxUfS0YO25FeL+yU/5KjHacVhgt5SJMiJz2mDjTywO7n17q9Dh4pwa8guZ4JzptRmXIxjbPkaExYpnX217bXbaSu+P1sUSLdASyhcd2Nq5K30OiSxSaVcAg78q6CwlKxfDM8rfskU79kSg1wDcXRsBV1L/DypWLiaGUF5GdR0LV1MmiVdLjbG+1BTcMt3UkZJ6UuCozVUxfb8cYPh1UL3gb02teIRXfwo2PPrSK4sBGSMfatwxMhUqceRosHBHStBFjJFKr4LHll1elaW8kVtLSPgUcIlmtxp60PclXHk5meU6uvrVGrV03p5NwpWYl8n+GhmtIoNwp/moNdnwLAp6KT5VpkkbYKaYNNp+VQPKoG4fwHlTsAI2swxlCB5VvsXA5GijcSftmoGVz1zQIFaN/GqnjIo34zvioOjEbiiwAdx0+9bxqODV/YFj8uKmLY9+KdgVpHpHSqZUJOwovssbZJrYhY8l2pgLuxape7mmHZNn5asEJx8posR4L7vJIfzS7DcdTj15VeqEHSdu8gUshOT+bkm7TodZ5eFHQm6IA7Zyf3jXPKLLjNDK2meJ4yAC4/xBzx/96V00vHUmT8/ALieRUTXO+UjUDDYUnA35ffurhW4rLC2iaMMu4Jxg/WioL15fjIDxkHDFfiU7bbVFSRplGWwwtLyO30xzRSNbJIzqAxCxsdgwO+3IHvoya+jCSxSSwxvOmlliOY5G7QYYY5bFtv6UoSeCAsJo3eFpAXGTjTnOAO4476y6u7Ke4/7rB2SKfgDNnHdk/jVJmbVOj1biPtBElxFY2MPvkyxoZWRgscQI2ye/wAACeW1MFkniwUZge4HNeU8M49NY3ouYIo1l2BZchsAYzjJBzz3BB2r0CP254ZLw5jKskd0Bhe0UBXOM9OROD0xmtFJCofw8Uu4+Zbbvo0cZnYDLgeYFJeBcYseIcIhu791tndhFpxjVJ1CgfalnGOKyWntDZ2iaUtTraXWuC2NlALY3JPLnnlkGjNDxTfB1cpvLv5ZFfPcRQyieByJcnHLBqaWcbfFFcuvgUIP0oq2tGJOZmYdcilYcALSzt34q6C6uIsBTtTRLCF8ASP/AKKs/JUX7Z+lUrIc4g9vfTahrwRRBezuTpchT38q2OHBOTZ8xU1t1U/HCoA/W509yG49Ad1w6Ej4HUeGaXPaaD09DXQiG2ZTgKW+lQmtIyg0bGlTHGfs57scVIAdRTRrTfkT6VU1uF5pSsuwAqPLwqBRzTWKC3f9KdPdVptbTGzNmqJyQmETdQo9a2Y8d3pTF7VAToy1Ve7MelFlWLnB6A1BdQ6GmosJTuEzV0PDW27RcDPOgTaQshYgggZpgt1IFA7D/pplFZQR9MnvJq4RR4+UVRm9RHx7LNLGoKLgbc6utuKMRh30sORHWqY7mOZCsgwQcZzQjwEOzIcxqfmHKlXsLfQ3u7hZIWdo8OGA57N31Kwuo0+VigfmhPLypUJl06WQsO7UakWi1ZEUigfvb0nHYanudRgPE2kPICh2Xp12pYdSHA3Bzg5ofhjLG+H1iM7lTjc+nnTOK6iuI2TSjNvlVJ28KyxcWauWRGG6ZV0YQkAgErnGds0TE094TldJXkQdjQccAW4wCdGdwRuN6aWUQhb84NQzjVnx2obHFNhfC7u+4Y6vbMGRZFk7NScFl+UkZz601sgL32jNxDM3Yj88sl0QcA8w39MHfFCx2bA6lZfINmse2RJBMq4YbsynOT41g5G60z3yxFvLbxkdm+VG4Ib71c1rC3Qj+E4ry72W45MkcVs8kYt0kyXYH5MHl643ru7S7jlUtA/aAHfTIcjzFdEdRNcHJPRknaYzFlGDkSS/66vRAowCfU0GkmrlI6+ZqwSP/mD1ArVSRi4vsJKg8xmt6R3UOHb9pT5bVLW4Gw/6qrJE4sk1vGx3WprGqDCiqlkbqRU1kzRaCmSKgihZrZifhO1Elu44rMk/rUnTBNoX+7yIThc+lWZkx8SOKMztjNaJoovNgXX4kz5pVodh8kAxRGSP1qwkdTmihZfRSkrFsNCRU9LM2TnHdWy3c2Kjrx+tS2QFmAKzNV9pUO0NGQYnxppLbqccudXCKaZc5BwMDflW5EIwWZNJ5aelQzgNjDZ69BTsqqM0GIaZlAA5Gpq2pSEwT3k0OzFmUhjt1POrfjXdHfHPfrQKzZL4Oor41uPVnIDelWrJPoXCqRnY5+1aLS7lnAHcWpDsY2V80Kntgr4Hw9p0+hFNLDi9uxPaLg/utn8a5WSQsBgLgeGfvU44lPzMo9ahwTRpHUaZ17cSgmlDRykOvToB55qxrwOzCNgpXxwd65NAikaZgd9uu9G2uYyMoxXPXfNZ+NGq1mx9bcSmgIZZMOrcwTkD8K6rhN/epbNcWbzRo50syE42riVEZ0hMxknIyM11vs1FfNFb3VrPH2SN8axk6iO4r19aiUfRpCV8nS+zPtJ2NxOvEZNTSYxJIx3Pcf8Ab1rq14ncZB7GCRDv8DkeW9cqOFe0l5cGaJLX3cnKxTx6Djzyf6U84dwa6XT79w7h4xuWVt/sKScgah2O4OII+zwSJ45yKLE0OPmA9aXG0tCcYTIHLTnFQNnaE7Jv/wCSfxq1JmbhHoam5hX/ABkH8wrXv1sNzcRAfxilLWduu4X/ANg//KoJFZOT+eVWHRlP41WTJ8aHH5Ss+t3CP+YK03FLFed5CP8AmClZsIG3SaL/AEf3oaWz7M7Sw48NqM2HiiOjxnh4299h/wBYqB49w7/xsP1pAVGcZjb0J/2rTOADqQEeCZqsmw8SHje0PDB/xsX3qB9pOFj/AI1D5A0gd7cj4o0x4xf2qpns+vZr5Rj8KNw8aOhf2n4UvO7B/lNUt7VcJG/vLf6DSHRZPzlGPBQKibaw76NwwQ7/AO13CDyuJD5RmoH2w4UP8Sb/ANI0mNrw8jqfAmo+5cO/aI/mNFDxR4CzyM35tD5kVD3eQnU2kHwoxArDSeY3zVnZp3sfSqUjLFASxsx+LJ8dqsaAu2M4HhRD/CvXPQd1ajxnctnvHKi2GKBGt2hTJk0j7mq+zkO504/eFHvb6rgALJK+NgBzpnF7PX8pUyw9kmM/GrMx8AF5/almlyGDZzRVwfhTrt/+UVaJLcELFGZHzgYA510Vpwp4ZxPDFOkucJJOACO/SoNM1sZFTtDrmkVf1uXpUS1opFR0X2c3HwziBYiSJIxy+MhRVospbZSJ75d+iKNvU/hT6NFjBPESEXHQfSlt01m6N2JKjO5YVktfJ0jRwUQQOQmm3lLt3OAM/anvsne8Rh4zbe6y9hcSSJGDjKsCQCCO7Fc1BMiuXC407gnmK7T/APnTWVx7TWomCFjlhq2BfGAQO/l960fBKas9sDyKfliPqamSzj4ooz6msS3YdG9TVvYEDakk6E3EDNqhbPYgHwc1trRWXSQR/NVzJIOQFQLyLzj27xSotN9FH5NA+R5E8nrDZXK/o7mbHiFNWG4x0I8xUTekHGRSySHU2Vm3vgN5Qw7mjx/Q0LLDcYw8DEfutRUl9IByBoGTizJnWjY8FzStFqMuylktov00M8Z8hU0WzkAMF2w8Nq0nHYm2Az/tUJr2zuBhlIPTBNVYUyx7BmGVusjyqiSxlA3mGP4T+FBTPJEddtJqXPyuSDU4uLSJgTBVH77k/wBqtNsRjWTg7TQDwZSP9qr90k/bh+p/Cj04pE3LT/JgH/arPe1k2wceMmaLYthZ7lOd1SNj51r3G5/y1+/4U4TsWGDEh8Tp/CphYO5R4aT+FPJhseBnghHySkDxWoPwRlIMk6jqAwx60PP7RTSyCKBBHqOAFXUx9TWXIg296vNcw2OCWP4VLk1yjHKL4C7Tgsdw2mbiFqCDuqHJ+pp5b8B4WqgSFZXO3xSEfbFcriGNAYnIPUciamePTO5XsbYFR8JKgldu+sNSGrN/FlqcVyju7G3s7Aara2SI4xrAyceZor362Cgy3TsAD8JkwPp1ryt7y4upT7xPIypj5if6VTLrRgS0hGMrz3pR/Fl/Ug/Y9I9A4txWyim16x2bDYA8sdPKl6e0NvKCLeB5HAzl8EL9t64gSsxzMx8d6yGd0fEAxnmTVfpRrczf5DbOmmmZ5dcxbAPLJ5eNLLi7iEmAQR0zsB6UsaaaRiQ5I65POjOFcOMr9pOQFU5Cn9ato6KjyLNyYb+TbueFGhTKtvknBPpTv2c4ffpxSyIhZmWdSNJGdj31WO3wNMuAOmdq6z2Atp34uJJnDRqMgZByapukaQjuejRzcUgJDXKMveck0SnELz9aeMj+A1vQvdjx5VFoV56/sK58mdGMe0XrfufmdPpUzeI3Nh9KBMaf5i/UVBoh0YGlkx+OPQc06HkV+1QYq45r6CgGUJyJ+hqt28Vz3YNJsagkFTRAg4ZV9KWTxP0dWrU1wyfs+gNBNfEnGojyWhFkJrcs2WQeijNDSLIDzx/KaKN02P0hPj3VTLcXCcj2nmua0RDKlkkU/MM+NTDsfmQN5ZqsX6McSx4PfpqYlhb9FIA3c1OxEJIkbfSynvAx+B+9Um0uc5t5X23xq3+n96Jae4jG6I4PVTiorchyAdS+DYI+9VkxYoFefiFvymHiJwyfc5FS/K/Eht7qp8VYEfWjNRxlHI/gcj7cqHa3iZiTBbsT1aJcmnkycTwq2fsm182qx7pQo0xA9MmrpOEyA5jmRgeXfWDhT4+JseVbujhUZAPbuTgZAPcayNsNkqGPOmI4TjnJjzqa8LKtkPn0otBhIXrOWICJvyqzU2jTIxVSPlBzRq8NOdnK+IFTHCU5mQmlaGoMUHQNiuR54qSMmdofqSaajhkKnlmrVs4xyUUZDWmxdbruS4J2woA28PSnXCJzG4jkRWDbZcAgemKq7FF5YqUQZXUoTkHIqWzSKpnaW/AEmjDpJHvzVGzXSeztnFw9nIQlz1L8vpV/C5ra5sYJREgYqNW3WmClB8pAHgBXPJtnXGKDo7pG2wQe7NSJjP8Amfynalr6h8rA+ZxQ0k10pyNQ+/8ASsy6Q6NxAm0mvHfsa0ZbaQZikIPmf9jSBryTlIM9+9Q97iHWRfImih0PXJXnJkfzUNLdMm4djS33wqMrONI66gapk4ueXaxHwK4/rRTANkvydiqtQzywyfMNP81Ay3iybmMnxUbULJdR8mRh5mrSJbGirCD8Fxv3HcVoyhPlljPgDSVnt38D4H+9UtKq8nPrVUS5DyR0fmhPqKEZyhyF28dqWG6XkXHoakLwAfpKqichkLvI2IHk2araRSfik0+Yx/SgBcKxz2qeWwq0GOUYb6g06FYassqHMTpIPCQ1P8pMNipz5GlbxvCcxyqV7nFZ7yw5pF9f70UK6ONijVts1ctrvsd/OrLaBtsKfrTqy4TLNg50+JNNsiMWxVHwuaX9Hv8AWiE4DdlSWRh9q6yx4NLGQXk7QdwAFdBaWDgrlFC+O9RkzZaa7POF4BddUcePStPwV0X43x5162kUYqMlrby7PEjDxFLJh40eLzWBQ7lT5NVHu/gfSvVr/wBm7SUlosIT0xSC+9mJFPwMuPpVKRL0/Rwxgx0NQCYYV01xwSZM5Gf4Tmlk1lNFJp0v61SZDgzofZm7kSHs9bYrpO1bSDqrleDo8WGZRt402kvSBjsD6VDNovYYM8jc3UjwNVmRU5n6tSl70B84KeYzUhc3LDMKwsPE4qcSshl7xH4g94BqiWXb51A8t6BaWY/PEinwOara4gUfnzPnuQjFKgyLnEZOrUM+tQaZl2Gg/wAtCyXEDfomdf46oeZwNpUYeAppEthMk7E8iD4D8KpaY/tr5Z3+9CPPIdlI9NqHLMD8SGtEjNyDmm6Ej1WqmkDcsD60N22PCom4HVapInIvyufmHoazWOhoftkO2CKzUDyc0xWE5U89HqKjsvLHmpoVgDvrFaAKcj96KFYzivCgwWYjxNWdrGd9IpVrc9aiV/eFFBY54ZaRSuocHnXacM4ZahAdGduprKysZHRp8DlLeKPGiNRV6qp30isrKRRU3OoNtyrKygCtjqG9CzcsZ2rKygBZdDnSW8jXOa3WUxMhGisOWMd1V3EkkXyOw9ayspkggupZSQ5Bx4Vpt23rKymiWUyMyH4WbfxqiWR9WNR5VlZTRLNRyP31t8asFVPjWVlNgjYjBHNh61WRpyATWVlNCYPJzqnJzWVlUQyQ35mpcq1WUASEYZQcmqWXGdzWVlMRpedXhFxyrKygD//Z')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                ammount={ammount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setAmount(ammount)}
                                selectCurrency={from}
                                onAmmountChange={(ammount) => setAmount(ammount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="to"
                                ammount={convertedAmount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setTO(currency)}
                                selectCurrency={from}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
