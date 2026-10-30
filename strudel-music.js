//slow track 
//use single sustained notes
//use minor 2nds = notes that are right next to each other
//pitch bend
//unrelated minor chords
//diminished chords
//creepy instruments - theremin, plucked violins, choir voices, brass, trombone,gong etc mainly strings ig

setcpm(60/4)
let gong = chord("~ ~ B#m Gm").s("gong").n(0).voicing().sustain(2).lpf(800).gain(4)
let motif = note("<[[f4 Ab4 [c4 e4]] g4 ~ ~ ] [[f4 Ab4 [c4 e4]] g4 ~ ~ ]>").s("piano")
let violin = chord("Fm E#m B#m Gm").s("gm_viola").voicing()
let violinalt = chord("Fm E#m B#m _ ").s("gm_viola").voicing()
let dogs = note("a1 ~ a1 ~").s("gm_voice_oohs").n(1).dist(9.3).gain(0.0025).hpf(400).clip(0.06).room(0.4)
let dogsalt = note("~ ~ a1 ~").s("gm_voice_oohs").n(1).dist(9.3).gain(0.0018).hpf(400).clip(0.06).room(0.4)
let dogsalt2 = note("~ ~ a1 a1").s("gm_voice_oohs").n(1).dist(9.3).gain(0.0025).hpf(400).clip(0.06).room(0.4)
let something = note("[a1 _ _ _ _ _ _ _ _ _ ]*10").s("gm_brass_section").n(0).gain("1.0 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1").room(0.3)
let wind = note("a1 ").s("gm_breath_noise").n(0).clip(0.6).release(1.0).sustain(3).gain(2)
let footsteps = note("<[[a1 a1] [a1 a1] ] [[a1 a1] [a1 a1] ] [[a1 a1] [a1 a1] ]  [[a1 a1] [a1 a1] ] >").s("gm_gunshot").n(0).room(1).gain(1.5)
let alarm = note("<[[a1 a1] [a1 a1] ] [[a1 a1] [a1 a1] ] [[a1 a1] [a1 a1] ]  [[a1 a1] [a1 a1] ] >").s("gm_gunshot").n(6).room(0.9).gain(0.7)
let underwater = note("c1 d1 e1 f1 a1 b1 g1 c2").s('gm_applause').gain(3).hpf(600)

//ambience:
$_: stack(arrange([1, note("< [b2,f3] >").s("gm_fx_echoes").n(2).release(1.8)], [8,note("<[c2,g3] [a2,e3] [b2,f3]>").s("gm_fx_echoes").n(2).release(1.8)])
,note("a3 d3 c3").s("gm_bird_tweet").n(5)
,note("<~ b3 ~ g3  ~ c3  ~ d3 ~>").s("gm_bird_tweet").n(2)
,note("<~ ~ a3 ~>").s("gm_bird_tweet").n(0))

//eerie song:
$_:stack( note("<[[g4 a4 g4 a4]@0.3 [b4@0.2 f3@0.1 f3@0.1]] [[g4 a4 g4 a4]@0.3 [b4@0.2 f3@0.1 f3@0.1]] [[f4 f4]@0.2 g4@0.3 [f3@0.35 [e3@0.6 e3@0.4]@0.6]@0.3]>").s("gm_voice_oohs").n(5).release(0.2).fast(1.6).room(0.3)
 ,note("<[[g4 a4 g4 a4]@0.3 [b4@0.2 f3@0.1 f3@0.1]] [[g4 a4 g4 a4]@0.3 [b4@0.2 f3@0.1 f3@0.1]] [[f4 f4]@0.2 g4@0.3 ~@0.3]>").s("xylophone_medium_pp").n(1).release(0.2).fast(1.6).gain(1.3))

//menu song:
$_:arrange(
        [1, stack(motif,gong,dogsalt,wind)],
        [1, stack(motif,gong,dogsalt)],
        [1, stack(motif,dogs,gong,violin.gain("0.1 0.2"))],
        [1, stack(motif,dogsalt2,gong,violin.gain("0.3 0.45"))],
        [1, stack(motif,dogs,gong,violin.gain("0.55 0.7"))],
        [1, stack(motif,dogs,gong,violinalt.gain("0.8 0.9"))],
        )

// battle/chase music:
$_: arrange(
  [8,stack(wind,footsteps,something,underwater,alarm).fast(1.4)]
) 
