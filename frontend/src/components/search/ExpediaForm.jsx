import { useState } from 'react';
import { PlaneTakeoff, MapPin, Calendar, Users, Baby } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const ExpediaForm = ({ partnerData, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    startDate: null,
    endDate: null,
    adults: 2,
    childrenCount: 0,
    childrenAges: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormData({ ...formData, startDate: start, endDate: end });
  };

  const handleChildrenCountChange = (e) => {
    const count = parseInt(e.target.value);
    const newAges = Array(count).fill(0).map((_, i) => formData.childrenAges[i] || 0);
    setFormData({ ...formData, childrenCount: count, childrenAges: newAges });
  };

  const handleChildAgeChange = (index, newAge) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = parseInt(newAge);
    setFormData({ ...formData, childrenAges: newAges });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!formData.startDate || !formData.endDate) {
        alert(t('messages.select_dates'));
        return;
    }

    let targetBaseUrl = 'https://www.expedia.es/Hotel-Search?misId=Agi8ia3d74GSpkgQqvukjO2si7W3ARgBIK-a3mc~ARINGgcIAhIDDAUBIOnwCho1CAESFgoDUEFSGN_Z9gIqCjIwMjUtMTItMTASFgoDTUFEGM2CkQIqCjIwMjUtMTItMTcqAQE&packageType=fh&searchProduct=hotel&sort=RECOMMENDED&tripType=ROUND_TRIP&cabinClass=COACH&useRewards=false&directFlights=false&infantsInSeats=0&partialStay=false';

    const params = new URLSearchParams();
    params.append('origin', formData.origin);
    params.append('destination', formData.destination);
    params.append('startDate', format(formData.startDate, 'yyyy-MM-dd'));
    params.append('endDate', format(formData.endDate, 'yyyy-MM-dd'));
    params.append('adults', formData.adults);

    if (formData.childrenCount > 0) {
        const agesStr = formData.childrenAges.map(age => `1_${age}`).join(',');
        params.append('children', agesStr);
    }

    const finalTargetUrl = `${targetBaseUrl}&${params.toString()}`;
    const finalAffiliateUrl = `${partnerData.trackingUrl}?url=${encodeURIComponent(finalTargetUrl)}`;
    
    window.open(finalAffiliateUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const baseInputClasses = "w-full border border-gray-200 rounded-xl p-4 pl-12 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none bg-white shadow-sm hover:border-gray-300";
  const textInputClasses = `${baseInputClasses} text-gray-800 font-medium`;
  const datePickerInputClasses = `${baseInputClasses} text-gray-800 font-medium cursor-pointer relative z-10`;
  const selectClasses = `${baseInputClasses} text-gray-800 font-medium cursor-pointer bg-white`;
  const labelClasses = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1";
  const iconClasses = "absolute left-4 top-[42px] text-gray-400 z-20 pointer-events-none";
  const childAgeSelectClasses = "w-full bg-white border border-gray-200 rounded-lg p-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition appearance-none text-center cursor-pointer shadow-sm font-medium";

  const ageOptions = [];
  ageOptions.push(<option key={0} value={0} className="bg-white text-gray-800">{t('forms.expedia.baby')}</option>);
  for (let i = 1; i <= 17; i++) {
      ageOptions.push(<option key={i} value={i} className="bg-white text-gray-800">{i} {i > 1 ? t('forms.expedia.years') : t('forms.expedia.year')}</option>);
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4 text-left">
      <div className="flex justify-center mb-6">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
          <img src="https://www.google.com/s2/favicons?domain=expedia.com&sz=128" alt="Expedia" className="w-12 h-12 object-contain" />
        </div>
      </div>
      
      <div className="relative">
        <label className={labelClasses}>{t('forms.expedia.origin')}</label>
        <PlaneTakeoff size={18} className={iconClasses} />
        <input type="text" name="origin" placeholder={t('forms.expedia.origin_placeholder')} required className={textInputClasses} onChange={handleChange} />
      </div>
      <div className="relative">
        <label className={labelClasses}>{t('forms.expedia.destination')}</label>
        <MapPin size={18} className={iconClasses} />
        <input type="text" name="destination" placeholder={t('forms.expedia.destination_placeholder')} required className={textInputClasses} onChange={handleChange} />
      </div>

      <div className="relative">
        <label className={labelClasses}>{t('forms.expedia.dates')}</label>
        <Calendar size={18} className={iconClasses} />
        <DatePicker
            selected={formData.startDate}
            onChange={handleDateChange}
            startDate={formData.startDate}
            endDate={formData.endDate}
            selectsRange
            minDate={new Date()}
            placeholderText={t('forms.expedia.dates_placeholder')}
            className={datePickerInputClasses}
            wrapperClassName="w-full"
            dateFormat="dd/MM/yyyy"
            required
            popperPlacement="bottom-start"
            portalId="root"
            autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
          <div className="relative">
             <label className={labelClasses}>{t('forms.expedia.adults')}</label>
             <Users size={18} className={iconClasses} />
             <select name="adults" className={selectClasses} value={formData.adults} onChange={handleChange}>
                {[1,2,3,4,5,6].map(num => (<option key={num} value={num} className="bg-white text-gray-800">{num}</option>))}
             </select>
          </div>
          <div className="relative">
              <label className={labelClasses}>{t('forms.expedia.children')}</label>
              <Baby size={18} className={iconClasses} />
              <select name="childrenCount" className={selectClasses} value={formData.childrenCount} onChange={handleChildrenCountChange}>
                  <option value={0} className="bg-white text-gray-800">{t('forms.expedia.children_none')}</option>
                  {[1,2,3,4,5,6].map(num => (<option key={num} value={num} className="bg-white text-gray-800">{num}</option>))}
              </select>
          </div>
      </div>
      {formData.childrenCount > 0 && (
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">{t('forms.expedia.children_ages')}</label>
            <div className="grid grid-cols-3 gap-2">
                {formData.childrenAges.map((age, index) => (
                    <div key={index} className="flex flex-col">
                        <select className={childAgeSelectClasses} value={age} onChange={(e) => handleChildAgeChange(index, e.target.value)}>{ageOptions}</select>
                    </div>
                ))}
            </div>
        </div>
      )}
      <button 
        type="submit" 
        className="w-full mt-6 bg-[#003580] hover:bg-[#002244] text-white font-bold py-4 rounded-full shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.01] active:scale-[0.98] text-lg uppercase tracking-tight"
      >
        {t('forms.expedia.submit')}
      </button>
    </form>
  );
};

export default ExpediaForm;