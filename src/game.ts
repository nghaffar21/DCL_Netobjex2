// do not forget to search for the phrase "change later" in this code
import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import {NPC} from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"

// -------------- The Main Scene and Grass --------------

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

// -------------- The Building --------------

const buildingDecentraland = new Entity('buildingDecentraland')
engine.addEntity(buildingDecentraland)
buildingDecentraland.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(25, -5, 45), // change later - the glb file is defective; it is overelevated
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
buildingDecentraland.addComponentOrReplace(transform18)
const gltfShape2 = new GLTFShape("18776037-a755-409f-8878-bfa279afae8a/building7.glb") // change later - the glb file is defective; it is overelevated
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
buildingDecentraland.addComponentOrReplace(gltfShape2)

// -------------- The Teletransportation System --------------

// ------ Import Circles ------

// floor 1

// ** in floor 1, circle numbers correspond to the room numbers;
// i.e circle1 takes user to room1 **

const middleCircle = new Entity() // Central Non-Functional Circle
middleCircle.addComponent(new CylinderShape())
engine.addEntity(middleCircle)

const leftCircle = new Entity() // Back from Other Rooms - Left Circle
leftCircle.addComponent(new CylinderShape())
engine.addEntity(leftCircle)

const rightCircle = new Entity() // Back from Other Rooms - Right Circle
rightCircle.addComponent(new CylinderShape())
engine.addEntity(rightCircle)

const circle1 = new Entity() // Artemis NFT Room1
circle1.addComponent(new CylinderShape())
engine.addEntity(circle1)

const circle2 = new Entity() // Room2
circle2.addComponent(new CylinderShape())
engine.addEntity(circle2)

const circle3 = new Entity() // Authentify Room3
circle3.addComponent(new CylinderShape())
engine.addEntity(circle3)

const circle4 = new Entity() // Room4
circle4.addComponent(new CylinderShape())
engine.addEntity(circle4)

const circle5 = new Entity() // True Docs Room5
circle5.addComponent(new CylinderShape())
engine.addEntity(circle5)

const circle6 = new Entity() // NFT Collection Room6
circle6.addComponent(new CylinderShape())
engine.addEntity(circle6)

const circle7 = new Entity() // Meeting Room7
circle7.addComponent(new CylinderShape())
engine.addEntity(circle7)

const circle8 = new Entity() // Room8
circle8.addComponent(new CylinderShape())
engine.addEntity(circle8)

const circle9 = new Entity() // Room9
circle9.addComponent(new CylinderShape())
engine.addEntity(circle9)

const circle10 = new Entity() // Room10
circle10.addComponent(new CylinderShape())
engine.addEntity(circle10)

// floor2 - change later

// floor3

// floor4

// floor5

// floor6

// floor 7

// ------ Set Scale and Position ------

// floor1

middleCircle.addComponent(new Transform({
	position: new Vector3(25, 0.2, 45),
	scale: new Vector3(2, 0.1, 2),
  rotation: new Quaternion(0, 0, 0, 1)
}))

leftCircle.addComponent(new Transform({
	position: new Vector3(25, 0.2, 37),
	scale: new Vector3(2, 0.1, 2),
  rotation: new Quaternion(0, 0, 0, 1)
}))

rightCircle.addComponent(new Transform({
	position: new Vector3(25, 0.2, 53),
	scale: new Vector3(2, 0.1, 2),
  rotation: new Quaternion(0, 0, 0, 1)
}))

circle1.addComponent(new Transform({
	position: new Vector3(28.46, 0.2, 39),
	scale: new Vector3(1, 0.1, 1),
  rotation: new Quaternion(0, 0, 0, 1)
}))

circle2.addComponent(new Transform({
	position: new Vector3(28.46, 0.2, 35),
	scale: new Vector3(1, 0.1, 1),
  rotation: new Quaternion(0, 0, 0, 1)
}))

circle3.addComponent(new Transform({
	position: new Vector3(25, 0.2, 33),
	scale: new Vector3(1, 0.1, 1),
  rotation: new Quaternion(0, 0, 0, 1)
}))

circle4.addComponent(new Transform({
	position: new Vector3(21.54, 0.2, 35),
	scale: new Vector3(1, 0.1, 1),
  rotation: new Quaternion(0, 0, 0, 1)
}))

circle5.addComponent(new Transform({
	position: new Vector3(21.54, 0.2, 39),
	scale: new Vector3(1, 0.1, 1),
  rotation: new Quaternion(0, 0, 0, 1)
}))

// ------ Set Color ------

const circleMaterial1 = new Material()
circleMaterial1.albedoColor = Color3.Red()
circleMaterial1.metallic = 0.9
circleMaterial1.roughness = 0.1

const circleMaterial2 = new Material()
circleMaterial2.albedoColor = Color3.Blue()
circleMaterial2.metallic = 0.9
circleMaterial2.roughness = 0.1

const circleMaterial3 = new Material()
circleMaterial3.albedoColor = Color3.Purple()
circleMaterial3.metallic = 0.9
circleMaterial3.roughness = 0.1

const circleMaterial4 = new Material()
circleMaterial4.albedoColor = Color3.Teal()
circleMaterial4.metallic = 0.9
circleMaterial4.roughness = 0.1

const circleMaterial5 = new Material()
circleMaterial5.albedoColor = Color3.Yellow()
circleMaterial5.metallic = 0.9
circleMaterial5.roughness = 0.1

// ------ Add Color to Circles ------

circle1.addComponent(circleMaterial1)

circle2.addComponent(circleMaterial2)

circle3.addComponent(circleMaterial3)

circle4.addComponent(circleMaterial4)

circle5.addComponent(circleMaterial5)

// ------ Add Teletransportation ------

circle1.addComponent(new utils.TriggerComponent(
	new utils.TriggerSphereShape(2), {
    onCameraEnter: () => {
      movePlayerTo({ x: 25, y: 5, z: 37 }, { x: 0, y: 0, z: 0 })
    },
  }
))

circle2.addComponent(new utils.TriggerComponent(
	new utils.TriggerSphereShape(2), {
    onCameraEnter: () => {
      movePlayerTo({ x: 25, y: 5, z: 53 }, { x: 0, y: 0, z: 0 })
    },
  }
))

circle3.addComponent(new utils.TriggerComponent(
	new utils.TriggerSphereShape(2), {
    onCameraEnter: () => {
      movePlayerTo({ x: 25, y: 10, z: 37 }, { x: 0, y: 0, z: 0 })
    },
  }
))

circle4.addComponent(new utils.TriggerComponent(
	new utils.TriggerSphereShape(2), {
    onCameraEnter: () => {
      movePlayerTo({ x: 25, y: 10, z: 53 }, { x: 0, y: 0, z: 0 })
    },
  }
))

circle5.addComponent(new utils.TriggerComponent(
	new utils.TriggerSphereShape(2), {
    onCameraEnter: () => {
      movePlayerTo({ x: 25, y: 15, z: 37 }, { x: 0, y: 0, z: 0 })
    },
  }
))

// -------------- The Assistant Robot(NPC) --------------

// The NPC Dialog
let delay = 10000; // delay of 10k means that the robot will stand on the circle for 10 seconds
export let NPCTalk: Dialog[] = [
  {
    name: 'greeting',
    text: 'Hi there'
  },
  {
    text: 'Where do you want to go?',
    isQuestion: true,
    buttons: [
      // Button for guiding user to Artemis NFT Room1
      {label: "Artemis NFT",
        triggeredActions: () => {
          robot.followPath({
            path: [new Vector3(25, 2, 37), new Vector3(28.46, 2, 39)],
            totalDuration: 2,
            loop: false,
            curve: true,
            startingPoint: 0,
            onFinishCallback: () => {
              log('Finished!')
            }
          })

          // take robot back to left circle after a 5 seconds delay
          robot.addComponent(
            new utils.Delay(delay, () => {
              robot.followPath({
                path: [new Vector3(28.46, 2, 39), new Vector3(25, 2, 37)],
                totalDuration: 2,
                loop: false,
                curve: true,
                startingPoint: 0,
                onFinishCallback: () => {
                  log('Finished!')
                }
              })
            })
          )
        },
        goToDialog: "to circle"
      },

      // Button for guiding user to Room2
      {label: "Room2",
        triggeredActions: () => {
          robot.followPath({
            path: [new Vector3(25, 2, 37), new Vector3(28.46, 2, 35)],
            totalDuration: 2,
            loop: false,
            curve: true,
            startingPoint: 0,
            onFinishCallback: () => {
              log('Finished!')
            }
          })

          // take robot back to left circle after a 5 seconds delay
          robot.addComponent(
            new utils.Delay(delay, () => {
              robot.followPath({
                path: [new Vector3(28.46, 2, 35), new Vector3(25, 2, 37)],
                totalDuration: 2,
                loop: false,
                curve: true,
                startingPoint: 0,
                onFinishCallback: () => {
                  log('Finished!')
                }
              })
            })
          )
        },
        goToDialog: "to circle"
      },

      // Button for guiding user to Authentify Room3
      {label: "Room3",
        triggeredActions: () => {
          robot.followPath({
            path: [new Vector3(25, 2, 37), new Vector3(25, 2, 33)],
            totalDuration: 2,
            loop: false,
            curve: true,
            startingPoint: 0,
            onFinishCallback: () => {
              log('Finished!')
            }
          })

          // take robot back to left circle after a 5 seconds delay
          robot.addComponent(
            new utils.Delay(delay, () => {
              robot.followPath({
                path: [new Vector3(25, 2, 33), new Vector3(25, 2, 37)],
                totalDuration: 2,
                loop: false,
                curve: true,
                startingPoint: 0,
                onFinishCallback: () => {
                  log('Finished!')
                }
              })
            })
          )
        },

        goToDialog: "to circle"
      }
]  },

  {
    name: "to circle",
    text: 'Great! then step on this circle',
    isEndOfDialog: true
  }
]

// Import the NPC
let robot = new NPC( {position: new Vector3(25, 2, 37)}, "models/robots/ron.glb",
  () => {
      robot.talk(NPCTalk)
  },
  {
    faceUser: true,
  }
)

// -------------- The TV screen --------------

// #1
const myVideoClip = new VideoClip(
  
  "models/videos/netobjex_new.mp4"

)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new BasicMaterial()
myMaterial.texture = myVideoTexture

// Create transform with a predefined rotation in Euler angles
let tvTransform = new Transform({ rotation: Quaternion.Euler(0, 90, 0) , position: new Vector3(25, 2, 53),
scale: new Vector3(5, 2.5, 5) })

// Use the .setEuler() function
tvTransform.rotation.setEuler(0, 90, 180)

// Set the `eulerAngles` field
tvTransform.rotation.eulerAngles = new Vector3(0, 180, 0)
// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(tvTransform)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

// #5
myVideoTexture.playing = true

// -------------- The Crypto-Currency price screen --------------
async function getCurrencies() {

  let url = 'https://api.nomics.com/v1/currencies/ticker?key=18ab3f9445bbd585bafa10ce197fd12c94099965'

  try {
    let response = await fetch(url)
    let json = await response.json()

    log(json)
    log((json[0]).price)

    // The Crypto-Currency price board
    const currencyBoard = new Entity()
    let box = new BoxShape()
    box.withCollisions = true
    currencyBoard.addComponent(box)
    engine.addEntity(currencyBoard)

    // set scale and position of the board
    currencyBoard.addComponent(new Transform({
    position: new Vector3(25, 6, 45),
    scale: new Vector3(4 ,2 , 0.1)
    }))

    // add the color of black to the board by using a black material
    const blackColor = new Material()
    blackColor.albedoColor = Color3.Black()
    blackColor.metallic = 0.9
    blackColor.roughness = 0.1

    //Assign the black color to the board
    currencyBoard.addComponent(blackColor)

    // the price of BTC entity
    const btcPriceText = new Entity()
    const btcText = new TextShape("BTC         " + (json[0]).price)
    btcText.color = Color3.Yellow()
    btcText.fontSize = 1
    btcPriceText.addComponent(btcText)
    btcPriceText.setParent(currencyBoard)
    engine.addEntity(btcPriceText)

    btcPriceText.addComponent(new Transform({
      position: new Vector3(0, 0.4, -1),
      scale: new Vector3(0.5 ,1 , 0.5) // scale and fontSize together set the size of the price text
      }))

    // the price of ETH entity
    const ethPriceText = new Entity()
    const ethText = new TextShape("ETH           " + (json[1]).price)
    ethText.color = Color3.Yellow()
    ethText.fontSize = 1
    ethPriceText.addComponent(ethText)
    ethPriceText.setParent(currencyBoard)
    engine.addEntity(ethPriceText)

    ethPriceText.addComponent(new Transform({
      position: new Vector3(0, 0.2, -1),
      scale: new Vector3(0.5 ,1 , 0.5) // scale and fontSize together set the size of the price text
      }))

    // the price of HEX entity
    const hexPriceText = new Entity()
    const hexText = new TextShape("HEX                 " + (json[2]).price)
    hexText.color = Color3.Yellow()
    hexText.fontSize = 1
    hexPriceText.addComponent(hexText)
    hexPriceText.setParent(currencyBoard)
    engine.addEntity(hexPriceText)

    hexPriceText.addComponent(new Transform({
      position: new Vector3(0, 0, -1),
      scale: new Vector3(0.5 ,1 , 0.5) // scale and fontSize together set the size of the price text
      }))

    // the price of ADA entity
    const adaPriceText = new Entity()
    const adaText = new TextShape("ADA                 " + (json[3]).price)
    adaText.color = Color3.Yellow()
    adaText.fontSize = 1
    adaPriceText.addComponent(adaText)
    adaPriceText.setParent(currencyBoard)
    engine.addEntity(adaPriceText)

    adaPriceText.addComponent(new Transform({
      position: new Vector3(0, -0.2, -1),
      scale: new Vector3(0.5 ,1 , 0.5) // scale and fontSize together set the size of the price text
      }))

    // the price of USDT entity
    const usdtPriceText = new Entity()
    const usdtText = new TextShape("USDT               " + (json[4]).price)
    usdtText.color = Color3.Yellow()
    usdtText.fontSize = 1
    usdtPriceText.addComponent(usdtText)
    usdtPriceText.setParent(currencyBoard)
    engine.addEntity(usdtPriceText)

    usdtPriceText.addComponent(new Transform({
      position: new Vector3(0, -0.4, -1),
      scale: new Vector3(0.5 ,1 , 0.5) // scale and fontSize together set the size of the price text
      }))

  } catch (e) {
    log('error getting event data ', e)
  }
}

getCurrencies()

// -------------- The NFT Gallery --------------

// Fetching the first NFT from opensea
const makersNFT1 = new Entity()
const shapeComponent1 = new NFTShape('ethereum://0xed595cfd58d32bb9d200aab5b9afd9dbdebdf9f4/1251', { // string will change according to NFT URL
    color: Color3.Green(),
    style: PictureFrameStyle.Diamond_Ornament,
})
makersNFT1.addComponent(shapeComponent1)
makersNFT1.addComponent(
 new Transform({
   position: new Vector3(25.7, 6, 60),
   scale: new Vector3(5,5,5),
   rotation: Quaternion.Euler(0, 0, 0)
 })
)

// Making the NFT clickable to direct user to opensea
makersNFT1.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xed595cfd58d32bb9d200aab5b9afd9dbdebdf9f4/1251", // string will change according to NFT URL
      "This is a test text to describe the NFT"
    )
  })
)

engine.addEntity(makersNFT1)



// Fetching the second NFT from opensea
const makersNFT2 = new Entity()
const shapeComponent2 = new NFTShape('ethereum://0xed595cfd58d32bb9d200aab5b9afd9dbdebdf9f4/1251', { // string will change according to NFT URL
    color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
})
makersNFT2.addComponent(shapeComponent2)
makersNFT2.addComponent(
 new Transform({
   position: new Vector3(30.7, 6, 60),
   scale: new Vector3(5,5,5),
   rotation: Quaternion.Euler(0, 0, 0)
 })
)

// Making the NFT clickable to direct user to opensea
makersNFT2.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xed595cfd58d32bb9d200aab5b9afd9dbdebdf9f4/1251", // string will change according to NFT URL
      "This is a test text to describe the NFT"
    )
  })
)

engine.addEntity(makersNFT2)


// Fetching the third NFT from opensea
const makersNFT3 = new Entity()
const shapeComponent3 = new NFTShape('ethereum://0xed595cfd58d32bb9d200aab5b9afd9dbdebdf9f4/1251', { // string will change according to NFT URL
    color: Color3.White(),
    style: PictureFrameStyle.Metal_Slim,
})
makersNFT3.addComponent(shapeComponent2)
makersNFT3.addComponent(
 new Transform({
   position: new Vector3(20.7, 6, 60),
   scale: new Vector3(5,5,5),
   rotation: Quaternion.Euler(0, 0, 0)
 })
)

// Making the NFT clickable to direct user to opensea
makersNFT3.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xed595cfd58d32bb9d200aab5b9afd9dbdebdf9f4/1251", // string will change according to NFT URL
      "This is a test text to describe the NFT"
    )
  })
)

engine.addEntity(makersNFT3)
