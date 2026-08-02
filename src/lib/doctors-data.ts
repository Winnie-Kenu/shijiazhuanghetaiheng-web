import { doctorsImages, type HospitalImage } from "./hospital-images";

export type DoctorBioSection = {
  heading?: string;
  text: string;
};

export type Doctor = {
  slug: string;
  name: string;
  title: string;
  image: HospitalImage;
  bio: DoctorBioSection[];
};

export const DOCTORS: Doctor[] = [
  {
    slug: "wang-chengying",
    name: "Dr. Wang Chengying",
    title: "Chief Physician, Associate Professor",
    image: doctorsImages[0],
    bio: [
      {
        text: "Hebei Provincial People’s Hospital (Grade A Tertiary General Hospital)\n\nCurrent Positions:\nSenior TCM Rehabilitation Specialist, Acupuncture & Tuina Department, Hebei Provincial People’s Hospital\nHe regularly joins multidisciplinary nephrology joint consultation at Shijiazhuang Hetaiheng Hospital, providing auxiliary TCM rehabilitation treatment for global kidney & dialysis patients.",
      },
    ],
  },
  {
    slug: "guo-sheng",
    name: "Director Guo Sheng",
    title: "Associate Chief Physician",
    image: doctorsImages[1],
    bio: [
      {
        text: "Core Nephrology Specialist of Shijiazhuang Hetaiheng Hospital\n\nCurrent Positions:\nSenior attending physician of integrated Chinese & Western Nephrology Department, Shijiazhuang Hetaiheng Hospital\nCore member of Zhang Daning National TCM Master Studio\nHe cooperates with Professor Tan Jinchuan to carry out multidisciplinary joint consultations, providing standardized dialysis management and integrated Chinese-Western medicine treatment for global patients from Africa, the Middle East and Southeast Asia.",
      },
    ],
  },
  {
    slug: "chen-dongjun",
    name: "Dr. Chen Dongjun",
    title: "Chief Physician",
    image: doctorsImages[2],
    bio: [
      {
        text: "Dr. Chen Dongjun is a Chief Physician specializing in nephrology, with extensive expertise in the diagnosis and treatment of various kidney diseases.",
      },
      {
        heading: "Clinical Expertise",
        text: "His clinical focus includes managing conditions such as acute and chronic glomerulonephritis, nephrotic syndrome, renal failure, diabetic nephropathy, renal hypertension, and systemic lupus erythematosus nephritis.",
      },
      {
        heading: "Education and Mentorship",
        text: "With a strong academic background, Dr. Chen graduated from Hebei Medical University and completed advanced training in nephrology at a provincial hospital. He further honed his skills under the mentorship of renowned nephrology experts, Professors Zheng Falei and Wang Zhigang.",
      },
      {
        heading: "Clinical Experience and Innovation",
        text: "Over a decade of clinical practice, he has developed a patient-centered approach, emphasizing individualized treatment plans tailored to specific conditions. His work has contributed to significant improvements in patients' quality of life, including helping hundreds regain normal kidney function.",
      },
    ],
  },
  {
    slug: "shi-wei",
    name: "Dr. Shi Wei",
    title: "Chief Physician",
    image: doctorsImages[3],
    bio: [
      {
        text: "Dr. Shi Wei is a Chief Physician and distinguished figure in the field of Chinese medicine nephrology. Currently serving as a Committee Member of the Nephrology Branch of the Chinese Association of Chinese Medicine, Director of the Hebei Provincial Acupoint External Therapy Committee of Chinese Medicine, and Executive Director of the Acupuncture and Moxibustion Society, he integrates traditional Chinese medicine (TCM) with modern therapeutic approaches.",
      },
      {
        heading: "Clinical Expertise",
        text: "Dr. Shi specializes in diagnosing and treating kidney disorders, including chronic nephritis, IgA nephropathy, membranous nephropathy, nephrotic syndrome, polycystic kidney disease, diabetic nephropathy, renal hypertension, and systemic lupus erythematosus-related kidney diseases.",
      },
      {
        heading: "Education and Mentorship",
        text: "As a direct disciple of Master Zhang Daning, a renowned \"National Master of Chinese Medicine\" (Guoyi Dashi), Dr. Shi has inherited profound expertise in TCM-based kidney disease management. His practice emphasizes the synergy of acupuncture and herbs.",
      },
    ],
  },
  {
    slug: "suo-fen",
    name: "Dr. Suo Fen",
    title: "Attending Physician",
    image: doctorsImages[4],
    bio: [
      {
        text: "Dr. Suo Fen is an Attending Physician with over 30 years of experience in Traditional Chinese Medicine (TCM). Currently, she serves as the Director of the Outpatient Department at Shijiazhuang Hetaiheng Hospital.",
      },
      {
        heading: "Clinical Expertise",
        text: "Her diagnostic and treatment scope encompasses various kidney diseases using TCM therapies. Clinically, she excels in the integrated use of Western and Chinese medicine for the diagnosis and treatment of chronic nephritis and uremia, as well as in the diagnosis and treatment of cardiocerebrovascular complications and internal medicine complications.",
      },
      {
        heading: "Education and Mentorship",
        text: "In terms of education and clinical experience, Dr. Suo has conducted in-depth research into TCM during her three decades of clinical practice. She has formed her unique academic perspectives and has participated in national learning programs for nephrology within TCM and advanced TCM theory seminars. By drawing on the strengths of various experts, she has enriched her TCM theoretical foundation and clinical skills.",
      },
    ],
  },
  {
    slug: "liu-dechang",
    name: "Dr. Liu Dechang",
    title: "Deputy Chief Physician of Nephrology",
    image: doctorsImages[5],
    bio: [
      {
        text: "Core Nephrology Specialist at the Hospital, affiliated with the Master of Traditional Chinese Medicine Zhang Daning's Studio Diagnosis and Treatment Team.",
      },
      {
        heading: "Professional Background",
        text: "With years of clinical experience in the integrated treatment of kidney diseases using both Western and Traditional Chinese Medicine, Dr. Liu has long focused on blocking renal fibrosis and managing chronic kidney disease throughout its entire course. As a key specialist in the hospital's nephrology department, he participates in clinical diagnosis, case discussions, and mentoring young physicians. He has extensive experience in treating both domestic and international patients with kidney diseases.",
      },
      {
        heading: "Areas of Expertise",
        text: "Specializing in integrated Western and Traditional Chinese Medicine approaches to block renal fibrosis, Dr. Liu's diagnostic and therapeutic coverage includes all categories of kidney diseases.",
      },
    ],
  },
  {
    slug: "xie-jinyu",
    name: "Dr. Xie Jinyu",
    title: "Chief Physician",
    image: doctorsImages[6],
    bio: [
      {
        text: "Member of the Hebei Provincial Medical Association Nephrology Committee, recipient of the Third Prize for Scientific and Technological Achievements in Hebei Province and the First Prize for Science and Technology from the Hebei Provincial Association of Traditional Chinese Medicine, and a team member of the Zhang Daning National Master of Traditional Chinese Medicine Studio.",
      },
      {
        heading: "Areas of Expertise",
        text: "1. Primary Kidney Diseases: IgA Nephropathy, Membranous Nephropathy, Nephrotic Syndrome, Acute and Chronic Nephritis, and Kidney Preservation in Early to Mid-stage Renal Failure;\n2. Secondary Kidney Diseases: Diabetic Nephropathy, Hypertensive Renal Damage, Purpura/Lupus Nephritis, and Hyperuricemic Nephropathy;\n3. Management of Dialysis Complications: Integrated Traditional Chinese and Western Medicine for Renal Anemia, Secondary Hyperparathyroidism, Refractory Edema, and Electrolyte Imbalances.",
      },
      {
        heading: "Treatment Characteristics",
        text: "Proficient in integrating Traditional Chinese and Western Medicine.",
      },
    ],
  },
  {
    slug: "tang-junting",
    name: "Dr. Tang Junting",
    title: "Deputy Chief Physician",
    image: doctorsImages[7],
    bio: [
      {
        text: "Dr. Tang Junting is the Deputy Chief Physician and Director of our dialysis center.",
      },
      {
        heading: "Clinical Expertise",
        text: "He specializes in treating uremia and dialysis-related complications through advanced techniques such as hemofiltration, hemoperfusion, and plasma exchange.",
      },
      {
        heading: "Professional Experience",
        text: "Serves as the Director of the dialysis Center at Shijiazhuang Hetaiheng Hospital, where he has dedicated years to managing complex renal cases. His compassionate approach includes tailoring dialysis schedules to accommodate patients’ needs, often extending his shifts to ensure thorough toxin clearance in critical cases.",
      },
      {
        heading: "Reputation & Recognition",
        text: "Received widespread patient recognition, including heartfelt gratitude letters and accolades for his humanitarian approach.\n\nColleagues commend his clinical acumen, particularly in managing rare cases like hyperkalemia-induced ventricular flutter, showcasing his ability to act swiftly under pressure.",
      },
    ],
  },
  {
    slug: "jia-yubo",
    name: "Dr. Jia Yubo",
    title: "Director of Nephropathy Department",
    image: doctorsImages[8],
    bio: [
      {
        text: "Core Backbone Physician of Zhang Daning Traditional Chinese Medicine Master Studio, Member of Nephropathy Diagnosis and Treatment Team of Integrated Traditional Chinese and Western Medicine.\n\nLong-term responsible for the management of inpatient wards, the whole process of diagnosis and treatment of inpatients, while participating in outpatient reception, consultation of overseas kidney patients, in-hospital case discussion and teaching of young doctors.",
      },
      {
        heading: "Employment Direction and Professional Expertise",
        text: "He has been deeply engaged in the clinical practice of nephropathy of integrated traditional Chinese and Western medicine for many years, focusing on blocking renal fibrosis and staging control of renal failure in various chronic kidney diseases: IgA nephropathy, membranous nephropathy, nephrotic syndrome, acute and chronic glomerulonephritis, polycystic kidney disease, simple renal cyst.",
      },
    ],
  },
  {
    slug: "tan-jinchuan",
    name: "Professor Tan Jinchuan",
    title: "Chief Physician, Second-Class Professor",
    image: doctorsImages[9],
    bio: [
      {
        text: "MD, Doctoral Supervisor\nFamous TCM Doctor of Hebei Province\nAdvanced Worker of National Health System\nNational Outstanding Clinical Talent of Traditional Chinese Medicine\n\nCurrent Positions:\nDirector of the First Nephrology Department & Chief Expert of Nephrology, Hebei Provincial Hospital of Traditional Chinese Medicine\nAcademic Leader of National Key Clinical Specialty (Nephrology)\nHe regularly holds multidisciplinary joint consultations at Shijiazhuang Hetaiheng Hospital to treat kidney disease & dialysis patients worldwide.",
      },
      {
        heading: "Academic Inheritance & Overseas Free Clinic Experience",
        text: "He studied under national top nephrology masters: Professors Chai Pengnian, Huang Wenzheng and Zhao Yuyong.\nHe has 30+ years experience in integrated TCM & Western nephropathy treatment.\nHe has traveled abroad for academic lectures and free medical outreach in the United Kingdom, Italy, the Netherlands, Canada, Singapore and Malaysia, sharing TCM kidney therapy.",
      },
    ],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}
