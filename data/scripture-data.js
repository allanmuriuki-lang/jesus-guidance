/* ============================================================
   scripture-data.js
   ------------------------------------------------------------
   All content for the "A Word For You" Scripture app lives here,
   as plain JavaScript data — no build step, no database.

   HOW TO EXPAND THIS FILE:
   1. Add a new entry to PASSAGES with a unique key (e.g. "PSA046").
      Give it a reference, book, translation, and a "verses" array
      of { v: <verse number>, t: <verse text> }.
   2. Add that key to one or more arrays inside CATEGORIES.
   3. If it's a brand-new category, add it to CATEGORY_META too,
      with an id, group ("feel" | "need" | "become"), label,
      emoji, and short blurb.
   That's it — the rest of the app (home screen, category pages,
   search, sharing, deep links) reads from this file automatically.

   Translation: World English Bible (WEB) — public domain.
   ============================================================ */

/* ---------- 1. PASSAGES ------------------------------------
   The full (or representative) text for every reference used
   in the category index below. Longer chapters (e.g. Psalm 91,
   1 Corinthians 13) are given in full where practical; a few of
   the very longest chapters (Hebrews 11, John 17, Luke 11) are
   included as a faithful, clearly-labeled excerpt so the app
   stays light — the data shape supports pasting in the rest of
   any chapter later without any code changes.
-------------------------------------------------------------- */
const PASSAGES = {

  "PSA034_4": { ref: "Psalm 34:4", book: "Psalm", verses: [
    { v: 4, t: "I sought Yahweh, and he answered me, and delivered me from all my fears." }
  ]},

  "MAT10_28": { ref: "Matthew 10:28", book: "Matthew", verses: [
    { v: 28, t: "Don't be afraid of those who kill the body, but are not able to kill the soul. Rather, fear him who is able to destroy both soul and body in Gehenna." }
  ]},

  "2TI01_7": { ref: "2 Timothy 1:7", book: "2 Timothy", verses: [
    { v: 7, t: "For God didn't give us a spirit of fear, but of power, love, and self-control." }
  ]},

  "HEB13_5_6": { ref: "Hebrews 13:5–6", book: "Hebrews", verses: [
    { v: 5, t: "Be free from the love of money, content with such things as you have, for he has said, \"I will in no way leave you, neither will I in any way forsake you.\"" },
    { v: 6, t: "So that with good courage we say, \"The Lord is my helper. I will not fear. What can man do to me?\"" }
  ]},

  "MAT06_25_34": { ref: "Matthew 6:25–34", book: "Matthew", verses: [
    { v: 25, t: "Therefore I tell you, don't be anxious for your life: what you will eat, or what you will drink; nor yet for your body, what you will wear. Isn't life more than food, and the body more than clothing?" },
    { v: 26, t: "See the birds of the sky, that they don't sow, neither reap, nor gather into barns. Your heavenly Father feeds them. Aren't you of much more value than they?" },
    { v: 27, t: "Which of you, by being anxious, can add one moment to his lifespan?" },
    { v: 28, t: "Why are you anxious about clothing? Consider the lilies of the field, how they grow. They don't toil, neither do they spin," },
    { v: 29, t: "yet I tell you that even Solomon in all his glory was not dressed like one of these." },
    { v: 30, t: "But if God so clothes the grass of the field, which today exists, and tomorrow is thrown into the oven, won't he much more clothe you, you of little faith?" },
    { v: 31, t: "Therefore don't be anxious, saying, 'What will we eat?', 'What will we drink?' or, 'With what will we be clothed?'" },
    { v: 32, t: "For the Gentiles seek after all these things; for your heavenly Father knows that you need all these things." },
    { v: 33, t: "But seek first God's Kingdom and his righteousness, and all these things will be given to you as well." },
    { v: 34, t: "Therefore don't be anxious for tomorrow, for tomorrow will be anxious for itself. Each day's own evil is sufficient." }
  ]},

  "PHP04_6_7": { ref: "Philippians 4:6–7", book: "Philippians", verses: [
    { v: 6, t: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God." },
    { v: 7, t: "And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus." }
  ]},

  "1PE05_6_7": { ref: "1 Peter 5:6–7", book: "1 Peter", verses: [
    { v: 6, t: "Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time;" },
    { v: 7, t: "casting all your worries on him, because he cares for you." }
  ]},

  "PSA046": { ref: "Psalm 46", book: "Psalm", verses: [
    { v: 1, t: "God is our refuge and strength, a very present help in trouble." },
    { v: 2, t: "Therefore we won't be afraid, though the earth changes, though the mountains are shaken into the heart of the seas;" },
    { v: 3, t: "though its waters roar and are troubled, though the mountains tremble with their swelling. Selah." },
    { v: 4, t: "There is a river, the streams of which make the city of God glad, the holy place of the tents of the Most High." },
    { v: 5, t: "God is within her. She shall not be moved. God will help her at dawn." },
    { v: 6, t: "The nations raged. The kingdoms were moved. He lifted his voice, and the earth melted." },
    { v: 7, t: "Yahweh of Armies is with us. The God of Jacob is our refuge. Selah." },
    { v: 8, t: "Come, see Yahweh's works, what desolations he has made in the earth." },
    { v: 9, t: "He makes wars cease to the end of the earth. He breaks the bow, and shatters the spear. He burns the chariots in the fire." },
    { v: 10, t: "\"Be still, and know that I am God. I will be exalted among the nations. I will be exalted in the earth.\"" },
    { v: 11, t: "Yahweh of Armies is with us. The God of Jacob is our refuge. Selah." }
  ]},

  "PSA023": { ref: "Psalm 23", book: "Psalm", verses: [
    { v: 1, t: "Yahweh is my shepherd: I shall lack nothing." },
    { v: 2, t: "He makes me lie down in green pastures. He leads me beside still waters." },
    { v: 3, t: "He restores my soul. He guides me in the paths of righteousness for his name's sake." },
    { v: 4, t: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me." },
    { v: 5, t: "You prepare a table before me in the presence of my enemies. You anoint my head with oil. My cup runs over." },
    { v: 6, t: "Surely goodness and loving kindness shall follow me all the days of my life, and I will dwell in Yahweh's house forever." }
  ]},

  "PSA042_6_11": { ref: "Psalm 42:6–11", book: "Psalm", verses: [
    { v: 6, t: "My God, my soul is in despair within me. Therefore I remember you from the land of the Jordan, the heights of Hermon, from the hill Mizar." },
    { v: 7, t: "Deep calls to deep at the noise of your waterfalls. All your waves and your billows have swept over me." },
    { v: 8, t: "Yahweh will command his loving kindness in the daytime. In the night his song shall be with me: a prayer to the God of my life." },
    { v: 9, t: "I will ask God, my rock, \"Why have you forgotten me? Why do I go mourning because of the oppression of the enemy?\"" },
    { v: 10, t: "As with a sword in my bones, my adversaries reproach me, while they continually ask me, \"Where is your God?\"" },
    { v: 11, t: "Why are you in despair, my soul? Why are you disturbed within me? Hope in God! For I shall still praise him, the saving help of my countenance, and my God." }
  ]},

  "PSA055_22": { ref: "Psalm 55:22", book: "Psalm", verses: [
    { v: 22, t: "Cast your burden on Yahweh, and he will sustain you. He will never allow the righteous to be moved." }
  ]},

  "PHP04_4_7": { ref: "Philippians 4:4–7", book: "Philippians", verses: [
    { v: 4, t: "Rejoice in the Lord always! Again I will say, rejoice!" },
    { v: 5, t: "Let your gentleness be known to all men. The Lord is at hand." },
    { v: 6, t: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God." },
    { v: 7, t: "And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus." }
  ]},

  "PSA027_1_6": { ref: "Psalm 27:1–6", book: "Psalm", verses: [
    { v: 1, t: "Yahweh is my light and my salvation. Whom shall I fear? Yahweh is the strength of my life. Of whom shall I be afraid?" },
    { v: 2, t: "When evildoers came at me to eat up my flesh, even my adversaries and my foes, they stumbled and fell." },
    { v: 3, t: "Though an army should encamp against me, my heart shall not fear. Though war should rise against me, even then I will be confident." },
    { v: 4, t: "One thing I have asked of Yahweh, that I will seek after, that I may dwell in Yahweh's house all the days of my life, to see Yahweh's beauty, and to inquire in his temple." },
    { v: 5, t: "For in the day of trouble he will keep me secretly in his pavilion. In the covert of his tabernacle he will hide me. He will lift me up on a rock." },
    { v: 6, t: "Now my head will be lifted up above my enemies around me. I will offer sacrifices of joy in his tent. I will sing, yes, I will sing praises to Yahweh." }
  ]},

  "PSA091": { ref: "Psalm 91", book: "Psalm", verses: [
    { v: 1, t: "He who dwells in the secret place of the Most High will rest in the shadow of the Almighty." },
    { v: 2, t: "I will say of Yahweh, \"He is my refuge and my fortress, my God, in whom I trust.\"" },
    { v: 3, t: "For he will deliver you from the snare of the fowler, and from the deadly pestilence." },
    { v: 4, t: "He will cover you with his feathers. Under his wings you will take refuge. His faithfulness is your shield and rampart." },
    { v: 5, t: "You shall not be afraid of the terror by night, nor of the arrow that flies by day;" },
    { v: 6, t: "nor of the pestilence that walks in darkness, nor of the destruction that wastes at noonday." },
    { v: 7, t: "A thousand may fall at your side, and ten thousand at your right hand; but it will not come near you." },
    { v: 8, t: "You will only look with your eyes, and see the recompense of the wicked." },
    { v: 9, t: "Because you have made Yahweh your refuge, and the Most High your dwelling place," },
    { v: 10, t: "no evil shall happen to you, neither shall any plague come near your dwelling." },
    { v: 11, t: "For he will put his angels in charge of you, to guard you in all your ways." },
    { v: 12, t: "They will bear you up in their hands, so that you won't dash your foot against a stone." },
    { v: 13, t: "You will tread on the lion and cobra. You will trample the young lion and the serpent underfoot." },
    { v: 14, t: "\"Because he has set his love on me, therefore I will deliver him. I will set him on high, because he has known my name." },
    { v: 15, t: "He will call on me, and I will answer him. I will be with him in trouble. I will deliver him, and honor him." },
    { v: 16, t: "I will satisfy him with long life, and show him my salvation.\"" }
  ]},

  "PHP04_19": { ref: "Philippians 4:19", book: "Philippians", verses: [
    { v: 19, t: "My God will supply every need of yours according to his riches in glory in Christ Jesus." }
  ]},

  "PSA032_8": { ref: "Psalm 32:8", book: "Psalm", verses: [
    { v: 8, t: "I will instruct you and teach you in the way which you shall go. I will counsel you with my eye on you." }
  ]},

  "PRO03_5_6": { ref: "Proverbs 3:5–6", book: "Proverbs", verses: [
    { v: 5, t: "Trust in Yahweh with all your heart, and don't lean on your own understanding." },
    { v: 6, t: "In all your ways acknowledge him, and he will make your paths straight." }
  ]},

  "JHN14_1_4": { ref: "John 14:1–4", book: "John", verses: [
    { v: 1, t: "\"Don't let your heart be troubled. Believe in God. Believe also in me." },
    { v: 2, t: "In my Father's house are many homes. If it weren't so, I would have told you. I am going to prepare a place for you." },
    { v: 3, t: "If I go and prepare a place for you, I will come again, and will receive you to myself; that where I am, you may be there also." },
    { v: 4, t: "Where I go, you know, and you know the way.\"" }
  ]},

  "JHN16_33": { ref: "John 16:33", book: "John", verses: [
    { v: 33, t: "\"I have told you these things, that in me you may have peace. In the world you have trouble, but cheer up! I have overcome the world.\"" }
  ]},

  "ROM05_1_5": { ref: "Romans 5:1–5", book: "Romans", verses: [
    { v: 1, t: "Being therefore justified by faith, we have peace with God through our Lord Jesus Christ;" },
    { v: 2, t: "through whom we also have our access by faith into this grace in which we stand. We rejoice in hope of the glory of God." },
    { v: 3, t: "Not only this, but we also rejoice in our sufferings, knowing that suffering produces perseverance;" },
    { v: 4, t: "and perseverance, proven character; and proven character, hope;" },
    { v: 5, t: "and hope doesn't disappoint us, because God's love has been poured out into our hearts through the Holy Spirit who was given to us." }
  ]},

  "MAT08_26": { ref: "Matthew 8:26", book: "Matthew", verses: [
    { v: 26, t: "He said to them, \"Why are you fearful, O you of little faith?\" Then he got up, rebuked the wind and the sea, and there was a great calm." }
  ]},

  "HEB11_EXCERPT": { ref: "Hebrews 11 (excerpt)", book: "Hebrews", note: "Hebrews 11 is long — the verses below are a representative excerpt. Read the full chapter in any WEB Bible.", verses: [
    { v: 1, t: "Now faith is assurance of things hoped for, proof of things not seen." },
    { v: 3, t: "By faith, we understand that the universe has been framed by the word of God, so that what is seen has not been made out of things which are visible." },
    { v: 6, t: "Without faith it is impossible to be well pleasing to him, for he who comes to God must believe that he exists, and that he is a rewarder of those who seek him." },
    { v: 8, t: "By faith, Abraham, when he was called, obeyed to go out to the place which he was to receive for an inheritance. He went out, not knowing where he went." },
    { v: 13, t: "These all died in faith, not having received the promises, but having seen them and embraced them from afar, and having confessed that they were strangers and pilgrims on the earth." },
    { v: 32, t: "What more shall I say? For the time would fail me if I told of Gideon, Barak, Samson, Jephthah, David, Samuel, and the prophets;" },
    { v: 33, t: "who, through faith subdued kingdoms, worked out righteousness, obtained promises, stopped the mouths of lions," },
    { v: 34, t: "quenched the power of fire, escaped the edge of the sword, from weakness were made strong, grew mighty in war, and caused foreign armies to flee." }
  ]},

  "PSA004": { ref: "Psalm 4", book: "Psalm", verses: [
    { v: 1, t: "Answer me when I call, God of my righteousness. Give me relief from my distress. Have mercy on me, and hear my prayer." },
    { v: 2, t: "You sons of men, how long shall my glory be turned into dishonor? Will you love vanity, and seek after falsehood? Selah." },
    { v: 3, t: "But know that Yahweh has set apart for himself him who is godly. Yahweh will hear when I call to him." },
    { v: 4, t: "Stand in awe, and don't sin. Search your own heart on your bed, and be still. Selah." },
    { v: 5, t: "Offer the sacrifices of righteousness. Put your trust in Yahweh." },
    { v: 6, t: "Many say, \"Who will show us any good?\" Yahweh, let the light of your face shine on us." },
    { v: 7, t: "You have put gladness in my heart, more than when their grain and their new wine are increased." },
    { v: 8, t: "In peace I will both lay myself down and sleep, for you, Yahweh, alone, make me live in safety." }
  ]},

  "PSA042_FULL": { ref: "Psalm 42", book: "Psalm", verses: [
    { v: 1, t: "As the deer pants for the water brooks, so my soul pants after you, God." },
    { v: 2, t: "My soul thirsts for God, for the living God. When shall I come and appear before God?" },
    { v: 5, t: "Why are you in despair, my soul? Why are you disturbed within me? Hope in God! For I shall still praise him for the saving help of his presence." }
  ]},

  "LUK11_EXCERPT": { ref: "Luke 11:1–13 (excerpt)", book: "Luke", note: "This excerpt includes the Lord's Prayer and the promise that follows it. Read the full chapter in any WEB Bible.", verses: [
    { v: 1, t: "When he finished praying in a certain place, one of his disciples said to him, \"Lord, teach us to pray, just as John also taught his disciples.\"" },
    { v: 2, t: "He said to them, \"When you pray, say, 'Our Father in heaven, may your name be kept holy. May your Kingdom come. May your will be done on earth, as it is in heaven." },
    { v: 3, t: "Give us day by day our daily bread." },
    { v: 4, t: "Forgive us our sins, for we ourselves also forgive everyone who is indebted to us. Bring us not into temptation, but deliver us from the evil one.'\"" },
    { v: 9, t: "\"I tell you, keep asking, and it will be given you. Keep seeking, and you will find. Keep knocking, and it will be opened to you." },
    { v: 10, t: "For everyone who asks receives. He who seeks finds. To him who knocks it will be opened." },
    { v: 13, t: "If you then, being evil, know how to give good gifts to your children, how much more will your heavenly Father give the Holy Spirit to those who ask him?\"" }
  ]},

  "JHN17_EXCERPT": { ref: "John 17 (excerpt)", book: "John", note: "John 17 is Jesus' long prayer for his disciples — the verses below are a representative excerpt.", verses: [
    { v: 1, t: "Jesus said these things, and lifting up his eyes to heaven, he said, \"Father, the time has come. Glorify your Son, that your Son may also glorify you;" },
    { v: 3, t: "This is eternal life, that they should know you, the only true God, and him whom you sent, Jesus Christ." },
    { v: 15, t: "I pray not that you would take them from the world, but that you would keep them from the evil one." },
    { v: 17, t: "Sanctify them in your truth. Your word is truth." },
    { v: 20, t: "Not for these only do I pray, but for those also who will believe in me through their word," },
    { v: 21, t: "that they may all be one; even as you, Father, are in me, and I in you, that they also may be one in us; that the world may believe that you sent me.\"" }
  ]},

  "1JN05_14_15": { ref: "1 John 5:14–15", book: "1 John", verses: [
    { v: 14, t: "This is the boldness which we have toward him, that if we ask anything according to his will, he listens to us." },
    { v: 15, t: "And if we know that he listens to us, whatever we ask, we know that we have the petitions which we have asked of him." }
  ]},

  "PSA027_14": { ref: "Psalm 27:14", book: "Psalm", verses: [
    { v: 14, t: "Wait for Yahweh. Be strong, and let your heart take courage. Yes, wait for Yahweh." }
  ]},

  "HEB10_36": { ref: "Hebrews 10:36", book: "Hebrews", verses: [
    { v: 36, t: "For you need endurance so that, having done the will of God, you may receive the promise." }
  ]},

  "LUK10_27": { ref: "Luke 10:27", book: "Luke", verses: [
    { v: 27, t: "He answered, \"You shall love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind; and your neighbor as yourself.\"" }
  ]},

  "1CO13": { ref: "1 Corinthians 13", book: "1 Corinthians", verses: [
    { v: 1, t: "If I speak with the languages of men and of angels, but don't have love, I have become sounding brass, or a clanging cymbal." },
    { v: 2, t: "If I have the gift of prophecy, and know all mysteries and all knowledge; and if I have all faith, so as to remove mountains, but don't have love, I am nothing." },
    { v: 3, t: "If I give away all my goods to feed the poor, and if I give my body to be burned, but don't have love, it profits me nothing." },
    { v: 4, t: "Love is patient and is kind. Love doesn't envy. Love doesn't brag, is not proud," },
    { v: 5, t: "doesn't behave itself inappropriately, doesn't seek its own way, is not provoked, takes no account of evil;" },
    { v: 6, t: "doesn't rejoice in unrighteousness, but rejoices with the truth;" },
    { v: 7, t: "bears all things, believes all things, hopes all things, endures all things." },
    { v: 8, t: "Love never fails. But where there are prophecies, they will be done away with. Where there are various languages, they will cease. Where there is knowledge, it will be done away with." },
    { v: 9, t: "For we know in part, and we prophesy in part;" },
    { v: 10, t: "but when that which is complete has come, then that which is partial will be done away with." },
    { v: 11, t: "When I was a child, I spoke as a child, I felt as a child, I thought as a child. Now that I have become a man, I have put away childish things." },
    { v: 12, t: "For now we see in a mirror, dimly, but then face to face. Now I know in part, but then I will know fully, even as I was also fully known." },
    { v: 13, t: "But now faith, hope, and love remain — these three. The greatest of these is love." }
  ]},

  "COL03_12_13": { ref: "Colossians 3:12–13", book: "Colossians", verses: [
    { v: 12, t: "Put on therefore, as God's chosen ones, holy and beloved, a heart of compassion, kindness, lowliness, humility, and perseverance;" },
    { v: 13, t: "bearing with one another, and forgiving each other, if any man has a complaint against any; even as Christ forgave you, so you also do." }
  ]},

  "LUK18_9_14": { ref: "Luke 18:9–14", book: "Luke", verses: [
    { v: 9, t: "He spoke also this parable to certain people who were convinced of their own righteousness, and who despised all others:" },
    { v: 10, t: "\"Two men went up into the temple to pray; one was a Pharisee, and the other was a tax collector." },
    { v: 11, t: "The Pharisee stood and prayed to himself like this: 'God, I thank you, that I am not like the rest of men, extortioners, unrighteous, adulterers, or even like this tax collector." },
    { v: 12, t: "I fast twice a week. I give tithes of all that I get.'" },
    { v: 13, t: "But the tax collector, standing far away, wouldn't even lift up his eyes to heaven, but beat his breast, saying, 'God, be merciful to me, a sinner!'" },
    { v: 14, t: "I tell you, this man went down to his house justified rather than the other; for everyone who exalts himself will be humbled, but he who humbles himself will be exalted.\"" }
  ]},

  "PHP02_3_11": { ref: "Philippians 2:3–11", book: "Philippians", verses: [
    { v: 3, t: "doing nothing through rivalry or through conceit, but in humility, each counting others better than himself;" },
    { v: 4, t: "each of you not just looking to his own things, but each of you also to the things of others." },
    { v: 5, t: "Have this in your mind, which was also in Christ Jesus," },
    { v: 6, t: "who, existing in the form of God, didn't consider equality with God a thing to be grasped," },
    { v: 7, t: "but emptied himself, taking the form of a servant, being made in the likeness of men." },
    { v: 8, t: "And being found in human form, he humbled himself, becoming obedient to death, yes, the death of the cross." },
    { v: 9, t: "Therefore God also highly exalted him, and gave to him the name which is above every name;" },
    { v: 10, t: "that at the name of Jesus every knee should bow, of those in heaven, those on earth, and those under the earth," },
    { v: 11, t: "and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father." }
  ]},

  "JHN14_6": { ref: "John 14:6", book: "John", verses: [
    { v: 6, t: "Jesus said to him, \"I am the way, the truth, and the life. No one comes to the Father, except through me.\"" }
  ]},

  "JHN17_17": { ref: "John 17:17", book: "John", verses: [
    { v: 17, t: "Sanctify them in your truth. Your word is truth." }
  ]},

  "EPH04_14_15": { ref: "Ephesians 4:14–15", book: "Ephesians", verses: [
    { v: 14, t: "that we may no longer be children, tossed back and forth and carried about with every wind of doctrine, by the trickery of men, in craftiness, after the wiles of error;" },
    { v: 15, t: "but speaking truth in love, we may grow up in all things into him, who is the head, Christ." }
  ]},

  "1CO15_57": { ref: "1 Corinthians 15:57", book: "1 Corinthians", verses: [
    { v: 57, t: "but thanks be to God, who gives us the victory through our Lord Jesus Christ." }
  ]},

  "1JN05_4": { ref: "1 John 5:4", book: "1 John", verses: [
    { v: 4, t: "For whatever is born of God overcomes the world. This is the victory that has overcome the world: our faith." }
  ]},

  /* -- Additional supporting passages for categories the brief
        named but didn't supply references for -- */

  "PSA034_18": { ref: "Psalm 34:18", book: "Psalm", verses: [
    { v: 18, t: "Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit." }
  ]},

  "MAT05_4": { ref: "Matthew 5:4", book: "Matthew", verses: [
    { v: 4, t: "Blessed are those who mourn, for they shall be comforted." }
  ]},

  "EPH04_26_27": { ref: "Ephesians 4:26–27", book: "Ephesians", verses: [
    { v: 26, t: "\"Be angry, and don't sin.\" Don't let the sun go down on your wrath," },
    { v: 27, t: "and don't give place to the devil." }
  ]},

  "JAS01_19_20": { ref: "James 1:19–20", book: "James", verses: [
    { v: 19, t: "So, then, my beloved brothers, let every man be swift to hear, slow to speak, and slow to anger;" },
    { v: 20, t: "for the anger of man doesn't produce the righteousness of God." }
  ]},

  "1JN01_9": { ref: "1 John 1:9", book: "1 John", verses: [
    { v: 9, t: "If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness." }
  ]},

  "PSA103_12": { ref: "Psalm 103:12", book: "Psalm", verses: [
    { v: 12, t: "As far as the east is from the west, so far has he removed our transgressions from us." }
  ]},

  "JAS01_5": { ref: "James 1:5", book: "James", verses: [
    { v: 5, t: "But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach; and it will be given to him." }
  ]},

  "1CO14_33": { ref: "1 Corinthians 14:33", book: "1 Corinthians", verses: [
    { v: 33, t: "for God is not a God of confusion, but of peace, as in all the assemblies of the saints." }
  ]},

  "1CO10_13": { ref: "1 Corinthians 10:13", book: "1 Corinthians", verses: [
    { v: 13, t: "No temptation has taken you except what is common to man. God is faithful, who will not allow you to be tempted above what you are able, but will with the temptation also make the way of escape, that you may be able to endure it." }
  ]},

  "JAS04_7": { ref: "James 4:7", book: "James", verses: [
    { v: 7, t: "Be subject therefore to God. But resist the devil, and he will flee from you." }
  ]},

  "REV21_4": { ref: "Revelation 21:4", book: "Revelation", verses: [
    { v: 4, t: "He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away." }
  ]},

  "2CO01_3_4": { ref: "2 Corinthians 1:3–4", book: "2 Corinthians", verses: [
    { v: 3, t: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort;" },
    { v: 4, t: "who comforts us in all our affliction, that we may be able to comfort those who are in any affliction, through the comfort with which we ourselves are comforted by God." }
  ]},

  "EPH04_32": { ref: "Ephesians 4:32", book: "Ephesians", verses: [
    { v: 32, t: "And be kind to one another, tender hearted, forgiving each other, just as God also in Christ forgave you." }
  ]},

  "MAT11_28_30": { ref: "Matthew 11:28–30", book: "Matthew", verses: [
    { v: 28, t: "\"Come to me, all you who labor and are heavily burdened, and I will give you rest." },
    { v: 29, t: "Take my yoke upon you, and learn from me, for I am gentle and humble in heart; and you will find rest for your souls." },
    { v: 30, t: "For my yoke is easy, and my burden is light.\"" }
  ]},

  "LAM03_22_23": { ref: "Lamentations 3:22–23", book: "Lamentations", verses: [
    { v: 22, t: "It is because of Yahweh's loving kindnesses that we are not consumed, because his compassion doesn't fail." },
    { v: 23, t: "They are new every morning. Great is your faithfulness." }
  ]},

  "HEB12_11": { ref: "Hebrews 12:11", book: "Hebrews", verses: [
    { v: 11, t: "All chastening seems for the present to be not joyous but grievous; yet afterward it yields the peaceful fruit of righteousness to those who have been trained by it." }
  ]},

  "2CO09_7": { ref: "2 Corinthians 9:7", book: "2 Corinthians", verses: [
    { v: 7, t: "Let each man give according as he has determined in his heart; not grudgingly, or under compulsion; for God loves a cheerful giver." }
  ]},

  "PRO11_25": { ref: "Proverbs 11:25", book: "Proverbs", verses: [
    { v: 25, t: "The liberal soul shall be made fat. He who waters shall be watered also himself." }
  ]},

  "1CO15_58": { ref: "1 Corinthians 15:58", book: "1 Corinthians", verses: [
    { v: 58, t: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the Lord's work, because you know that your labor is not in vain in the Lord." }
  ]},

  "1TH05_16_18": { ref: "1 Thessalonians 5:16–18", book: "1 Thessalonians", verses: [
    { v: 16, t: "Rejoice always." },
    { v: 17, t: "Pray without ceasing." },
    { v: 18, t: "In everything give thanks, for this is the will of God in Christ Jesus toward you." }
  ]},

  "LUK16_10": { ref: "Luke 16:10", book: "Luke", verses: [
    { v: 10, t: "He who is faithful in a very little is faithful also in much. He who is dishonest in a very little is dishonest also in much." }
  ]},

  "COL03_23": { ref: "Colossians 3:23", book: "Colossians", verses: [
    { v: 23, t: "And whatever you do, work heartily, as for the Lord, and not for men," }
  ]}
};

/* ---------- 2. CATEGORY META ---------------------------------
   Everything the UI needs to draw a category "card": id (also
   used in the URL, e.g. #feel/afraid), group, label, emoji, and
   a short compassionate blurb.
----------------------------------------------------------------*/
const CATEGORY_META = {

  // ----- How I Feel -----
  afraid:      { id: "afraid", group: "feel", label: "Afraid", emoji: "🕯️", blurb: "For when fear feels close." },
  anxious:     { id: "anxious", group: "feel", label: "Anxious", emoji: "🌬️", blurb: "For a racing, restless mind." },
  worried:     { id: "worried", group: "feel", label: "Worried", emoji: "🌊", blurb: "For when tomorrow feels heavy." },
  discouraged: { id: "discouraged", group: "feel", label: "Discouraged", emoji: "🍂", blurb: "For when you want to give up." },
  lonely:      { id: "lonely", group: "feel", label: "Lonely", emoji: "🌙", blurb: "For when no one seems near." },
  sad:         { id: "sad", group: "feel", label: "Sad", emoji: "💧", blurb: "For a heavy, aching heart." },
  angry:       { id: "angry", group: "feel", label: "Angry", emoji: "🔥", blurb: "For when anger burns hot." },
  guilty:      { id: "guilty", group: "feel", label: "Guilty", emoji: "🕊️", blurb: "For when regret won't let go." },
  doubting:    { id: "doubting", group: "feel", label: "Doubting", emoji: "❓", blurb: "For honest questions of faith." },
  confused:    { id: "confused", group: "feel", label: "Confused", emoji: "🌫️", blurb: "For when the way isn't clear." },
  tempted:     { id: "tempted", group: "feel", label: "Tempted", emoji: "⚖️", blurb: "For a moment of testing." },
  grieving:    { id: "grieving", group: "feel", label: "Grieving", emoji: "🥀", blurb: "For loss and mourning." },

  // ----- What I Need -----
  peace:        { id: "peace", group: "need", label: "Peace", emoji: "🕊️", blurb: "A calm that outlasts circumstance." },
  guidance:     { id: "guidance", group: "need", label: "Guidance", emoji: "🧭", blurb: "For the next right step." },
  protection:   { id: "protection", group: "need", label: "Protection", emoji: "🛡️", blurb: "Shelter for uncertain days." },
  strength:     { id: "strength", group: "need", label: "Strength", emoji: "💪", blurb: "For when you're running low." },
  courage:      { id: "courage", group: "need", label: "Courage", emoji: "🦁", blurb: "Boldness for the hard thing." },
  hope:         { id: "hope", group: "need", label: "Hope", emoji: "🌅", blurb: "A light on the horizon." },
  comfort:      { id: "comfort", group: "need", label: "Comfort", emoji: "🤲", blurb: "Nearness in your pain." },
  forgiveness:  { id: "forgiveness", group: "need", label: "Forgiveness", emoji: "🌿", blurb: "Grace that makes new." },
  encouragement:{ id: "encouragement", group: "need", label: "Encouragement", emoji: "✨", blurb: "A word to keep you going." },
  prayer:       { id: "prayer", group: "need", label: "Prayer", emoji: "🙏", blurb: "Help finding the words." },
  wisdom:       { id: "wisdom", group: "need", label: "Wisdom", emoji: "📖", blurb: "Clarity for decisions." },
  rest:         { id: "rest", group: "need", label: "Rest", emoji: "🌙", blurb: "Permission to be still." },

  // ----- What I Want to Become -----
  loving:      { id: "loving", group: "become", label: "Loving", emoji: "❤️", blurb: "Growing a heart that loves well." },
  patient:     { id: "patient", group: "become", label: "Patient", emoji: "⏳", blurb: "Growing in steady endurance." },
  faithful:    { id: "faithful", group: "become", label: "Faithful", emoji: "🌾", blurb: "Growing in quiet trust." },
  humble:      { id: "humble", group: "become", label: "Humble", emoji: "🙇", blurb: "Growing a lowly heart." },
  kind:        { id: "kind", group: "become", label: "Kind", emoji: "🌼", blurb: "Growing in gentleness." },
  truthful:    { id: "truthful", group: "become", label: "Truthful", emoji: "🔦", blurb: "Growing in honesty." },
  courageous:  { id: "courageous", group: "become", label: "Courageous", emoji: "🛡️", blurb: "Growing in boldness." },
  disciplined: { id: "disciplined", group: "become", label: "Disciplined", emoji: "🎯", blurb: "Growing in self-control." },
  forgiving:   { id: "forgiving", group: "become", label: "Forgiving", emoji: "🕊️", blurb: "Growing a soft heart." },
  peaceful:    { id: "peaceful", group: "become", label: "Peaceful", emoji: "🌊", blurb: "Growing an unshaken calm." },
  generous:    { id: "generous", group: "become", label: "Generous", emoji: "🎁", blurb: "Growing an open hand." },
  steadfast:   { id: "steadfast", group: "become", label: "Steadfast", emoji: "⚓", blurb: "Growing in staying power." },
  prayerful:   { id: "prayerful", group: "become", label: "Prayerful", emoji: "🙏", blurb: "Growing a praying heart." },
  responsible: { id: "responsible", group: "become", label: "Responsible", emoji: "🗝️", blurb: "Growing in faithfulness with little." }
};

/* ---------- 3. CATEGORY → PASSAGES ----------------------------
   Which Scripture references show up for each category, in the
   order they should be displayed.
----------------------------------------------------------------*/
const CATEGORIES = {
  afraid:        ["PSA034_4", "MAT10_28", "2TI01_7", "HEB13_5_6"],
  anxious:       ["MAT06_25_34", "PHP04_6_7", "1PE05_6_7", "PSA046"],
  worried:       ["MAT06_25_34", "PHP04_6_7", "1PE05_6_7", "PSA046"],
  discouraged:   ["PSA023", "PSA042_6_11", "PSA055_22", "PHP04_4_7"],
  lonely:        ["PSA023", "HEB13_5_6"],
  sad:           ["PSA034_18", "MAT05_4", "PSA023"],
  angry:         ["EPH04_26_27", "JAS01_19_20", "COL03_12_13"],
  guilty:        ["1JN01_9", "PSA103_12", "COL03_12_13"],
  doubting:      ["MAT08_26", "HEB11_EXCERPT"],
  confused:      ["JAS01_5", "1CO14_33", "PRO03_5_6"],
  tempted:       ["1CO10_13", "JAS04_7", "2TI01_7"],
  grieving:      ["MAT05_4", "REV21_4", "PSA023"],

  peace:         ["JHN14_1_4", "JHN16_33", "ROM05_1_5", "PHP04_6_7"],
  guidance:      ["PSA032_8", "PRO03_5_6"],
  protection:    ["PSA027_1_6", "PSA091", "PHP04_19"],
  strength:      ["2TI01_7", "PSA046", "HEB13_5_6"],
  courage:       ["PSA027_14", "HEB13_5_6", "MAT08_26"],
  hope:          ["ROM05_1_5", "PSA042_6_11", "REV21_4"],
  comfort:       ["2CO01_3_4", "PSA034_18", "MAT05_4"],
  forgiveness:   ["1JN01_9", "PSA103_12", "EPH04_32"],
  encouragement: ["HEB13_5_6", "PSA055_22", "PHP04_4_7"],
  prayer:        ["PSA004", "PSA042_FULL", "LUK11_EXCERPT", "JHN17_EXCERPT", "1JN05_14_15"],
  wisdom:        ["JAS01_5", "PRO03_5_6"],
  rest:          ["MAT11_28_30", "PSA023"],

  loving:      ["LUK10_27", "1CO13"],
  patient:     ["HEB10_36", "1CO13"],
  faithful:    ["LAM03_22_23", "1CO15_58"],
  humble:      ["LUK18_9_14", "PHP02_3_11"],
  kind:        ["COL03_12_13", "EPH04_32"],
  truthful:    ["JHN14_6", "JHN17_17", "EPH04_14_15"],
  courageous:  ["PSA027_14", "HEB13_5_6"],
  disciplined: ["2TI01_7", "HEB12_11"],
  forgiving:   ["COL03_12_13", "EPH04_32"],
  peaceful:    ["JHN16_33", "PHP04_6_7"],
  generous:    ["2CO09_7", "PRO11_25"],
  steadfast:   ["JAS01_5", "1CO15_58"],
  prayerful:   ["1TH05_16_18", "PHP04_6_7"],
  responsible: ["LUK16_10", "COL03_23"]
};

/* ---------- 4. HOME SCREEN QUICK CATEGORIES -------------------
   The larger set of "how are you feeling today" buttons shown
   on the hero of the home screen (mix of feel + need groups).
----------------------------------------------------------------*/
const HOME_QUICK_CATEGORIES = [
  "afraid","anxious","worried","discouraged","lonely","sad","angry","guilty",
  "doubting","confused","tempted","grieving","peace","guidance","protection",
  "strength","courage","hope","encouragement","prayer","thankful","joyful"
];

/* "Thankful" and "Joyful" reuse existing content thoughtfully. */
CATEGORY_META.thankful = { id: "thankful", group: "need", label: "Thankful", emoji: "🌻", blurb: "A heart of gratitude." };
CATEGORY_META.joyful   = { id: "joyful", group: "need", label: "Joyful", emoji: "☀️", blurb: "Rejoicing in the Lord." };
CATEGORIES.thankful = ["1TH05_16_18", "PSA004"];
CATEGORIES.joyful   = ["PHP04_4_7", "1CO13"];

/* ---------- 5. DAILY SCRIPTURE ROTATION ------------------------
   A small hand-picked collection. The home screen picks one
   based on today's date (day-of-year modulo list length) so it
   changes daily but needs no server or API.
----------------------------------------------------------------*/
const DAILY_SCRIPTURE_KEYS = [
  "PSA034_4", "PHP04_6_7", "JHN16_33", "PSA023", "PSA046", "PRO03_5_6",
  "HEB13_5_6", "ROM05_1_5", "1CO13", "PSA091", "LAM03_22_23", "PSA004",
  "MAT11_28_30", "PSA027_1_6", "1JN01_9", "2TI01_7", "COL03_12_13",
  "1CO15_57", "PSA032_8", "REV21_4"
];

/* ---------- 6. SEARCH KEYWORDS ---------------------------------
   Maps everyday search words to category ids, so "fear", "scared"
   and "afraid" all find the Afraid category, etc. Simple, local,
   no AI needed.
----------------------------------------------------------------*/
const SEARCH_SYNONYMS = {
  afraid: ["afraid","fear","scared","frightened","terrified"],
  anxious: ["anxious","anxiety","nervous","panic","overwhelmed"],
  worried: ["worried","worry","worrying","stress","stressed"],
  discouraged: ["discouraged","discouragement","defeated","giving up"],
  lonely: ["lonely","loneliness","alone","isolated","abandoned"],
  sad: ["sad","sadness","down","heartbroken","unhappy"],
  angry: ["angry","anger","mad","furious","frustrated"],
  guilty: ["guilty","guilt","shame","ashamed","regret"],
  doubting: ["doubting","doubt","doubts","unsure","skeptical"],
  confused: ["confused","confusion","unclear","lost","indecisive"],
  tempted: ["tempted","temptation","struggling","addiction"],
  grieving: ["grieving","grief","mourning","loss","bereaved","death"],
  peace: ["peace","calm","peaceful","tranquility"],
  guidance: ["guidance","direction","decision","decisions","path"],
  protection: ["protection","safety","safe","danger","refuge"],
  strength: ["strength","strong","weak","weary","tired","exhausted"],
  courage: ["courage","brave","bravery","bold"],
  hope: ["hope","hopeless","hopeful","future"],
  comfort: ["comfort","comforted","consolation"],
  forgiveness: ["forgiveness","forgive","forgiven","mercy"],
  encouragement: ["encouragement","encourage","motivation","support"],
  prayer: ["prayer","pray","praying","talk to god"],
  wisdom: ["wisdom","wise","understanding","insight"],
  rest: ["rest","tired","sleep","burned out","burnout","weary"],
  thankful: ["thankful","thanks","gratitude","grateful"],
  joyful: ["joyful","joy","happy","happiness","rejoice"],
  loving: ["love","loving","compassion"],
  patient: ["patience","patient","waiting"],
  faithful: ["faithful","faithfulness","loyal","loyalty"],
  humble: ["humble","humility","meek"],
  kind: ["kind","kindness","gentle","gentleness"],
  truthful: ["truth","truthful","honest","honesty"],
  courageous: ["courageous","fearless"],
  disciplined: ["discipline","disciplined","self-control","focus"],
  forgiving: ["forgiving","letting go"],
  peaceful: ["peaceful","calmness"],
  generous: ["generous","generosity","giving"],
  steadfast: ["steadfast","persevere","perseverance","endurance"],
  prayerful: ["prayerful","devoted"],
  responsible: ["responsible","responsibility","duty","faithful with little"]
};
