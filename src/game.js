"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getCurrencies = exports.NPCTalk = void 0;
// do not forget to search for the phrase "change later" in this code
var utils = require("@dcl/ecs-scene-utils");
var RestrictedActions_1 = require("@decentraland/RestrictedActions");
var npc_scene_utils_1 = require("@dcl/npc-scene-utils");
// -------------- The Main Scene and Grass --------------
var _scene = new Entity('_scene');
engine.addEntity(_scene);
var transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);
var entity = new Entity('entity');
engine.addEntity(entity);
entity.setParent(_scene);
var gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb");
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
var transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity.addComponentOrReplace(transform2);
var entity2 = new Entity('entity2');
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape);
var transform3 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity2.addComponentOrReplace(transform3);
var entity3 = new Entity('entity3');
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape);
var transform4 = new Transform({
    position: new Vector3(40, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity3.addComponentOrReplace(transform4);
var entity4 = new Entity('entity4');
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape);
var transform5 = new Transform({
    position: new Vector3(56, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity4.addComponentOrReplace(transform5);
var entity5 = new Entity('entity5');
engine.addEntity(entity5);
entity5.setParent(_scene);
entity5.addComponentOrReplace(gltfShape);
var transform6 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity5.addComponentOrReplace(transform6);
var entity6 = new Entity('entity6');
engine.addEntity(entity6);
entity6.setParent(_scene);
entity6.addComponentOrReplace(gltfShape);
var transform7 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity6.addComponentOrReplace(transform7);
var entity7 = new Entity('entity7');
engine.addEntity(entity7);
entity7.setParent(_scene);
entity7.addComponentOrReplace(gltfShape);
var transform8 = new Transform({
    position: new Vector3(40, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity7.addComponentOrReplace(transform8);
var entity8 = new Entity('entity8');
engine.addEntity(entity8);
entity8.setParent(_scene);
entity8.addComponentOrReplace(gltfShape);
var transform9 = new Transform({
    position: new Vector3(56, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity8.addComponentOrReplace(transform9);
var entity9 = new Entity('entity9');
engine.addEntity(entity9);
entity9.setParent(_scene);
entity9.addComponentOrReplace(gltfShape);
var transform10 = new Transform({
    position: new Vector3(8, 0, 40),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity9.addComponentOrReplace(transform10);
var entity10 = new Entity('entity10');
engine.addEntity(entity10);
entity10.setParent(_scene);
entity10.addComponentOrReplace(gltfShape);
var transform11 = new Transform({
    position: new Vector3(24, 0, 40),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity10.addComponentOrReplace(transform11);
var entity11 = new Entity('entity11');
engine.addEntity(entity11);
entity11.setParent(_scene);
entity11.addComponentOrReplace(gltfShape);
var transform12 = new Transform({
    position: new Vector3(40, 0, 40),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity11.addComponentOrReplace(transform12);
var entity12 = new Entity('entity12');
engine.addEntity(entity12);
entity12.setParent(_scene);
entity12.addComponentOrReplace(gltfShape);
var transform13 = new Transform({
    position: new Vector3(56, 0, 40),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity12.addComponentOrReplace(transform13);
var entity13 = new Entity('entity13');
engine.addEntity(entity13);
entity13.setParent(_scene);
entity13.addComponentOrReplace(gltfShape);
var transform14 = new Transform({
    position: new Vector3(8, 0, 56),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity13.addComponentOrReplace(transform14);
var entity14 = new Entity('entity14');
engine.addEntity(entity14);
entity14.setParent(_scene);
entity14.addComponentOrReplace(gltfShape);
var transform15 = new Transform({
    position: new Vector3(24, 0, 56),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity14.addComponentOrReplace(transform15);
var entity15 = new Entity('entity15');
engine.addEntity(entity15);
entity15.setParent(_scene);
entity15.addComponentOrReplace(gltfShape);
var transform16 = new Transform({
    position: new Vector3(40, 0, 56),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity15.addComponentOrReplace(transform16);
var entity16 = new Entity('entity16');
engine.addEntity(entity16);
entity16.setParent(_scene);
entity16.addComponentOrReplace(gltfShape);
var transform17 = new Transform({
    position: new Vector3(56, 0, 56),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
entity16.addComponentOrReplace(transform17);
// -------------- The Building --------------
var buildingDecentraland = new Entity('buildingDecentraland');
engine.addEntity(buildingDecentraland);
buildingDecentraland.setParent(_scene);
var transform18 = new Transform({
    position: new Vector3(25, -5, 45),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
buildingDecentraland.addComponentOrReplace(transform18);
var gltfShape2 = new GLTFShape("18776037-a755-409f-8878-bfa279afae8a/building7.glb"); // change later - the glb file is defective; it is overelevated
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
buildingDecentraland.addComponentOrReplace(gltfShape2);
// -------------- The Teletransportation System --------------
// ------ Import Circles ------
// floor 1
// ** in floor 1, circle numbers correspond to the room numbers;
// i.e circle1 takes user to room1 **
var middleCircle = new Entity(); // Central Non-Functional Circle
middleCircle.addComponent(new CylinderShape());
engine.addEntity(middleCircle);
var leftCircle = new Entity(); // Back from Other Rooms - Left Circle
leftCircle.addComponent(new CylinderShape());
engine.addEntity(leftCircle);
var rightCircle = new Entity(); // Back from Other Rooms - Right Circle
rightCircle.addComponent(new CylinderShape());
engine.addEntity(rightCircle);
var circle1 = new Entity(); // Artemis NFT Room1
circle1.addComponent(new CylinderShape());
engine.addEntity(circle1);
var circle2 = new Entity(); // Room2
circle2.addComponent(new CylinderShape());
engine.addEntity(circle2);
var circle3 = new Entity(); // Authentify Room3
circle3.addComponent(new CylinderShape());
engine.addEntity(circle3);
var circle4 = new Entity(); // Room4
circle4.addComponent(new CylinderShape());
engine.addEntity(circle4);
var circle5 = new Entity(); // True Docs Room5
circle5.addComponent(new CylinderShape());
engine.addEntity(circle5);
var circle6 = new Entity(); // NFT Collection Room6
circle6.addComponent(new CylinderShape());
engine.addEntity(circle6);
var circle7 = new Entity(); // Meeting Room7
circle7.addComponent(new CylinderShape());
engine.addEntity(circle7);
var circle8 = new Entity(); // Room8
circle8.addComponent(new CylinderShape());
engine.addEntity(circle8);
var circle9 = new Entity(); // Room9
circle9.addComponent(new CylinderShape());
engine.addEntity(circle9);
var circle10 = new Entity(); // Room10
circle10.addComponent(new CylinderShape());
engine.addEntity(circle10);
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
}));
leftCircle.addComponent(new Transform({
    position: new Vector3(25, 0.2, 37),
    scale: new Vector3(2, 0.1, 2),
    rotation: new Quaternion(0, 0, 0, 1)
}));
rightCircle.addComponent(new Transform({
    position: new Vector3(25, 0.2, 53),
    scale: new Vector3(2, 0.1, 2),
    rotation: new Quaternion(0, 0, 0, 1)
}));
circle1.addComponent(new Transform({
    position: new Vector3(28.46, 0.2, 39),
    scale: new Vector3(1, 0.1, 1),
    rotation: new Quaternion(0, 0, 0, 1)
}));
circle2.addComponent(new Transform({
    position: new Vector3(28.46, 0.2, 35),
    scale: new Vector3(1, 0.1, 1),
    rotation: new Quaternion(0, 0, 0, 1)
}));
circle3.addComponent(new Transform({
    position: new Vector3(25, 0.2, 33),
    scale: new Vector3(1, 0.1, 1),
    rotation: new Quaternion(0, 0, 0, 1)
}));
circle4.addComponent(new Transform({
    position: new Vector3(21.54, 0.2, 35),
    scale: new Vector3(1, 0.1, 1),
    rotation: new Quaternion(0, 0, 0, 1)
}));
circle5.addComponent(new Transform({
    position: new Vector3(21.54, 0.2, 39),
    scale: new Vector3(1, 0.1, 1),
    rotation: new Quaternion(0, 0, 0, 1)
}));
// ------ Set Color ------
var circleMaterial1 = new Material();
circleMaterial1.albedoColor = Color3.Red();
circleMaterial1.metallic = 0.9;
circleMaterial1.roughness = 0.1;
var circleMaterial2 = new Material();
circleMaterial2.albedoColor = Color3.Blue();
circleMaterial2.metallic = 0.9;
circleMaterial2.roughness = 0.1;
var circleMaterial3 = new Material();
circleMaterial3.albedoColor = Color3.Purple();
circleMaterial3.metallic = 0.9;
circleMaterial3.roughness = 0.1;
var circleMaterial4 = new Material();
circleMaterial4.albedoColor = Color3.Teal();
circleMaterial4.metallic = 0.9;
circleMaterial4.roughness = 0.1;
var circleMaterial5 = new Material();
circleMaterial5.albedoColor = Color3.Yellow();
circleMaterial5.metallic = 0.9;
circleMaterial5.roughness = 0.1;
// ------ Add Color to Circles ------
circle1.addComponent(circleMaterial1);
circle2.addComponent(circleMaterial2);
circle3.addComponent(circleMaterial3);
circle4.addComponent(circleMaterial4);
circle5.addComponent(circleMaterial5);
// ------ Add Teletransportation ------
circle1.addComponent(new utils.TriggerComponent(new utils.TriggerSphereShape(2), {
    onCameraEnter: function () {
        (0, RestrictedActions_1.movePlayerTo)({ x: 25, y: 5, z: 37 }, { x: 0, y: 0, z: 0 });
    }
}));
circle2.addComponent(new utils.TriggerComponent(new utils.TriggerSphereShape(2), {
    onCameraEnter: function () {
        (0, RestrictedActions_1.movePlayerTo)({ x: 25, y: 5, z: 53 }, { x: 0, y: 0, z: 0 });
    }
}));
circle3.addComponent(new utils.TriggerComponent(new utils.TriggerSphereShape(2), {
    onCameraEnter: function () {
        (0, RestrictedActions_1.movePlayerTo)({ x: 25, y: 10, z: 37 }, { x: 0, y: 0, z: 0 });
    }
}));
circle4.addComponent(new utils.TriggerComponent(new utils.TriggerSphereShape(2), {
    onCameraEnter: function () {
        (0, RestrictedActions_1.movePlayerTo)({ x: 25, y: 10, z: 53 }, { x: 0, y: 0, z: 0 });
    }
}));
circle5.addComponent(new utils.TriggerComponent(new utils.TriggerSphereShape(2), {
    onCameraEnter: function () {
        (0, RestrictedActions_1.movePlayerTo)({ x: 25, y: 15, z: 37 }, { x: 0, y: 0, z: 0 });
    }
}));
// -------------- The Assistant Robot(NPC) --------------
// The NPC Dialog
var delay = 10000; // delay of 10k means that the robot will stand on the circle for 10 seconds
exports.NPCTalk = [
    {
        name: 'greeting',
        text: 'Hi there'
    },
    {
        text: 'Where do you want to go?',
        isQuestion: true,
        buttons: [
            // Button for guiding user to Artemis NFT Room1
            { label: "Artemis NFT",
                triggeredActions: function () {
                    robot.followPath({
                        path: [new Vector3(25, 2, 37), new Vector3(28.46, 2, 39)],
                        totalDuration: 2,
                        loop: false,
                        curve: true,
                        startingPoint: 0,
                        onFinishCallback: function () {
                            log('Finished!');
                        }
                    });
                    // take robot back to left circle after a 5 seconds delay
                    robot.addComponent(new utils.Delay(delay, function () {
                        robot.followPath({
                            path: [new Vector3(28.46, 2, 39), new Vector3(25, 2, 37)],
                            totalDuration: 2,
                            loop: false,
                            curve: true,
                            startingPoint: 0,
                            onFinishCallback: function () {
                                log('Finished!');
                            }
                        });
                    }));
                },
                goToDialog: "to circle" },
            // Button for guiding user to Room2
            { label: "Room2",
                triggeredActions: function () {
                    robot.followPath({
                        path: [new Vector3(25, 2, 37), new Vector3(28.46, 2, 35)],
                        totalDuration: 2,
                        loop: false,
                        curve: true,
                        startingPoint: 0,
                        onFinishCallback: function () {
                            log('Finished!');
                        }
                    });
                    // take robot back to left circle after a 5 seconds delay
                    robot.addComponent(new utils.Delay(delay, function () {
                        robot.followPath({
                            path: [new Vector3(28.46, 2, 35), new Vector3(25, 2, 37)],
                            totalDuration: 2,
                            loop: false,
                            curve: true,
                            startingPoint: 0,
                            onFinishCallback: function () {
                                log('Finished!');
                            }
                        });
                    }));
                },
                goToDialog: "to circle" },
            // Button for guiding user to Authentify Room3
            { label: "Room3",
                triggeredActions: function () {
                    robot.followPath({
                        path: [new Vector3(25, 2, 37), new Vector3(25, 2, 33)],
                        totalDuration: 2,
                        loop: false,
                        curve: true,
                        startingPoint: 0,
                        onFinishCallback: function () {
                            log('Finished!');
                        }
                    });
                    // take robot back to left circle after a 5 seconds delay
                    robot.addComponent(new utils.Delay(delay, function () {
                        robot.followPath({
                            path: [new Vector3(25, 2, 33), new Vector3(25, 2, 37)],
                            totalDuration: 2,
                            loop: false,
                            curve: true,
                            startingPoint: 0,
                            onFinishCallback: function () {
                                log('Finished!');
                            }
                        });
                    }));
                },
                goToDialog: "to circle" }
        ]
    },
    {
        name: "to circle",
        text: 'Great! then step on this circle',
        isEndOfDialog: true
    }
];
// Import the NPC
var robot = new npc_scene_utils_1.NPC({ position: new Vector3(25, 2, 37) }, "models/robots/ron.glb", function () {
    robot.talk(exports.NPCTalk);
}, {
    faceUser: true
});
// -------------- The TV screen --------------
// #1
var myVideoClip = new VideoClip(
//"models/videos/netobjex_new.mp4"
"http://localhost:8000/live/1234/index.m3u8");
// #2
var myVideoTexture = new VideoTexture(myVideoClip);
// #3
var myMaterial = new BasicMaterial();
myMaterial.texture = myVideoTexture;
// Create transform with a predefined rotation in Euler angles
var tvTransform = new Transform({ rotation: Quaternion.Euler(0, 90, 0), position: new Vector3(25, 2, 53),
    scale: new Vector3(5, 2.5, 5) });
// Use the .setEuler() function
tvTransform.rotation.setEuler(0, 90, 180);
// Set the `eulerAngles` field
tvTransform.rotation.eulerAngles = new Vector3(0, 180, 0);
// #4
var screen = new Entity();
screen.addComponent(new PlaneShape());
screen.addComponent(tvTransform);
screen.addComponent(myMaterial);
screen.addComponent(new OnPointerDown(function () {
    myVideoTexture.playing = !myVideoTexture.playing;
}));
engine.addEntity(screen);
// #5
myVideoTexture.playing = true;
// -------------- The Crypto-Currency price screen --------------
function getCurrencies() {
    return __awaiter(this, void 0, void 0, function () {
        var currencies, url, response, json, _i, _a, currency, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currencies = [];
                    url = 'https://api.nomics.com/v1/exchange-rates?key=18ab3f9445bbd585bafa10ce197fd12c94099965';
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _b.sent();
                    log(json);
                    for (_i = 0, _a = json.data; _i < _a.length; _i++) {
                        currency = _a[_i];
                        currencies.push(currency);
                    }
                    log(currencies);
                    return [2 /*return*/, currencies];
                case 4:
                    e_1 = _b.sent();
                    log('error getting event data ', e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getCurrencies = getCurrencies;
// let apikey = {
//
// }
//
// request('GET', 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
// .then().catch()
//
// function request(method, url) {
//   return new Promise(function(resovle, reject){
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url)
//     xhr.onload = resolve;
//     xhr.onerror = reject;
//     xhr.send();
//   });
// }
